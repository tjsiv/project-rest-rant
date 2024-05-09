const router = require('express').Router()
const places = require('../models/places.js')

//places first render HOME
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//get places NEW **form
router.get('/new', (req, res) => {
  res.render('places/new')
})

//prop show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



//POST new place ~~form
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

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




module.exports = router
