// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// GET /places
app.use('/places', require('./controllers/places'))
  
//homepage
app.get('/', (req, res) => {
    res.render('home')
  })  

//error
app.get('*', (req, res) => {
  res.render('error404')
});

//listen for connections
app.listen(process.env.PORT)


