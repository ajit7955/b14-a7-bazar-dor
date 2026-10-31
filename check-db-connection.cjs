const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 30000,
  query_timeout: 15000,
});

async function main() {
  try {
    console.log("Connecting to PostgreSQL...");

    const result = await pool.query(`
      SELECT
        current_database() AS database_name,
        current_schema() AS schema_name,
        NOW() AS server_time
    `);

    console.log("PostgreSQL query successful:");
    console.log(result.rows[0]);
  } catch (error) {
    console.log("Error name:", error.name);
    console.log("Error code:", error.code ?? "not provided");
    console.log("Error message:", error.message);
  } finally {
    await pool.end();
  }
}

main();
