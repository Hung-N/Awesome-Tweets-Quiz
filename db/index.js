const pgp = require('pg-promise')();
const db= pgp({
  host: 'localhost',
  database: 'crap'
});

module.exports = db;
