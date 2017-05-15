const express = require("express")

const router = express.Router();




router.get('/', (req, res) => {

  // if (req.cookies.list == null) {
  //   res.cookie('list', [])
  // }
  res.render('index')

})


router.get('/dashboard', (req, res) => {

  if (req.cookies.list == null) { res.cookie('list', []) }
  const list = req.cookies.list
  const userName = list[list.length-1].name
  const message = list[list.length-1].message
  console.log(list)
  console.log(`print this to screen: ${userName} says ${message}`)
  res.render('dashboard', {list})
})


router.post('/', (req, res, next) => {
  const params = req.body
  const userName = params.userName
  const message = params.message
  res.cookie('userName', userName)
  res.cookie('message', message)
  const list = req.cookies.list
  list.push({'name': userName, 'message': message})
  res.cookie('list', list)
  // res.render('index')
  res.redirect('dashboard')
})

















module.exports = router;
