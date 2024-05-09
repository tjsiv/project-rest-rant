const router = require('express').Router()
const places = require('../models/places.js')

//places first render
router.get('/', (req, res) => {
    res.render('places/index', { places })
})


//get places new
router.get('/new', (req, res) => {
  res.render('places/new')
})



//post new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // DEfault image if one isn't provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router
