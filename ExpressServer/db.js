const Pool = require("pg").Pool;

const pool = new Pool({
    user:"",
    password: "",
    database: "",
    port: 5432,
    host: "",
    ssl: { rejectUnauthorized: false }
});

//Solution to: Error acquiring client Error: self signed certificate
// => https://stackoverflow.com/a/61125814

module.exports = pool;

