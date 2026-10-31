const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
});

async function main() {
  try {
    const result = await pool.query(`
      SELECT schemaname, tablename
      FROM pg_catalog.pg_tables
      WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
      ORDER BY schemaname, tablename
    `);

    console.log("Database tables:");
    console.table(result.rows);

    if (result.rows.length === 0) {
      console.log("No user tables found.");
    }
  } catch (error) {
    console.log("Diagnostic failed:", error.message);
  } finally {
    await pool.end();
  }
}

main();
