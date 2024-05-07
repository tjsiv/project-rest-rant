const router = require('express').Router()

//get places new
router.get('/new', (req, res) => {
  res.render('places/new')
})


//get places id
router.get('/', (req, res) => {
    
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/images/h-thai-ml-tables.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
  
    res.render('places/index.jsx', { places })
})

module.exports = router
