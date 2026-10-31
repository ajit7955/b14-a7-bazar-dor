const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
});

async function main() {
  try {
    const info = await pool.query(`
      SELECT
        current_database() AS database_name,
        current_schema() AS current_schema,
        current_setting('search_path') AS search_path
    `);

    const tables = await pool.query(`
      SELECT schemaname, tablename
      FROM pg_catalog.pg_tables
      WHERE tablename IN (
        'user', 'session', 'account', 'verification'
      )
      ORDER BY schemaname, tablename
    `);

    console.log("Connection and schema:");
    console.log(info.rows[0]);

    console.log("Better Auth tables found:");
    console.log(tables.rows);
  } catch (error) {
    console.error("Diagnostic failed:", {
      code: error.code,
      message: error.message,
    });
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

main();
