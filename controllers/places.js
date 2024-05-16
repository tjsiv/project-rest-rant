// const router = require('express').Router()
// const places = require('../models/places.js')


// //places first render HOME
// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })

// //get places NEW **form
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })



// //POST new place ~~form
// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     // DEfault image if one isn't provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// //prop show route
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })

// //put route
// router.put('/:id', (req, res) => {
//   let i = Number(req.params.id)
//   if (isNaN(i)) {
//       res.render('error404')
//   }
//   else if (!places[i]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[i]
//       places[i] = req.body
//       res.redirect(`/places/${i}`)
//   }
// })

// //DELETE ROUTE
// router.delete('/:id', (req, res) => {
//   let i = Number(req.params.id)
//   if (isNaN(i)) {
//       res.render('error404')
//   }
//   else if (!places[i]) {
//       res.render('error404')
//   }
//   else { 
//       places.splice(i, 1)
//       res.redirect('/places')
//   }
// })

// //EDIT LINK
// router.get('/:id/edit', (req, res) => {
//   let i = Number(req.params.id)
//   if (isNaN(i)) {
//       res.render('error404')
//   }
//   else if (!places[i]) {
//       res.render('error404')
//   }
//   else { 
//       res.render('places/edit', { place: places[i], i})
//   }
// })

// module.exports = router



//INDEX ROUTE
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//New place Route
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
  })
})

 //get places NEW **form
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW Route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
