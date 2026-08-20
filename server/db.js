const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5000,
  database: "pern_practice",
});

module.exports = pool;
