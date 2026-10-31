const dns = require("node:dns").promises;
const net = require("node:net");

async function main() {
  let host;
  let port;

  try {
    const url = new URL(process.env.DATABASE_URL);
    host = url.hostname;
    port = Number(url.port || 5432);

    console.log("Database host:", host);
    console.log("Port:", port);

    await dns.lookup(host);
    console.log("DNS lookup: OK");

    await new Promise((resolve, reject) => {
      const socket = net.createConnection({ host, port });
      socket.setTimeout(10000);

      socket.once("connect", () => {
        console.log("TCP connection: OK");
        socket.destroy();
        resolve();
      });

      socket.once("timeout", () => {
        socket.destroy();
        reject(new Error("TCP connection timed out"));
      });

      socket.once("error", reject);
    });
  } catch (error) {
    console.log("Diagnostic result:", error.message);
  }
}

main();
