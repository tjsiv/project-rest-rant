//config
require('dotenv').config()
const express = require('express')
const app = express()

//engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// GET /places
app.use('/places', require('./controllers/places'))
  
//homepage
app.get('/', (req, res) => {
    res.render('home')
  })  

//error
app.get('*', (req, res) => {
  res.render('error404')
})


app.listen(process.env.PORT)
