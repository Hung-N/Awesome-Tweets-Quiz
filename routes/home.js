const express = require("express")
const db = require('../db')
const router = express.Router();




router.get('/', (req, res) => {
  res.render('index')
})


// router.get('/dashboard', (req, res) => {
//
//   if (req.cookies.list == null) {
//     res.cookie('list', [{'name': 'New User', 'message': 'Testing one 2 three'}])
//   }
//   const list = req.cookies.list
//   const userName = list[list.length-1].name
//   const message = list[list.length-1].message
//
//   console.log(`print this to screen: ${userName} says ${message}`)
//   res.render('dashboard', {list})
// })

router.get('/dashboard', (req, res) => {

  db.query(`SELECT * FROM tweets ORDER BY id DESC`).then(tweets => {
    // res.send(posts);
    res.render('dashboard', {tweets});
    console.log(tweets);
  })
})

// router.post('/', (req, res, next) => {
//   const params = req.body
//   const userName = params.userName
//   const message = params.message
//   res.cookie('userName', userName)
//   res.cookie('message', message)
//   const list = req.cookies.list
//   list.push({'name': userName, 'message': message})
//   res.cookie('list', list)
//   // res.render('index')
//   console.log(params)
//   res.redirect('dashboard')
// })

router.post('/', (req, res, next) => {
  const params = req.body

  db.query(`
    INSERT INTO tweets (name, message)
    VALUES ($<userName>, $<message>)
  `, params ).then(()=>{
    res.redirect('/dashboard')
  })
  console.log(params);
})

















module.exports = router;
