const db = require('./index');

db.query(`
  CREATE TABLE tweets (
    id SERIAL,
    name VARCHAR(25),
    messag VARCHAR(144)
  )
`)
  .then(() => {
  console.log('table successfully created');
  process.exit();
})
.catch(err => {
  console.error(err);
  process.exit();
});
