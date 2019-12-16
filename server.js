// express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// handle cross-origin requests
const cors = require('cors')
const origin = process.env.NODE_ENV === 'production' ? 'http://prod-url.com' : 'http://localhost:3000'
app.use(cors({ origin }))

// handle post request with body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//routes
const reviewRoutes = require('./routes/reviews')

app.get('/', function(req,res) {
  res.json({res})
});

app.use('/api/reviews', reviewRoutes);
// app.get('/burgerLayers', (req, res) => {
//   res.json({ burgerLayers })
// })

// app.post('/burgerLayers', (req, res) => {
//   console.log(req.body.data) // data from client.
//   burgerLayers = req.body.data // replace this line with code adding to database.
//   res.json({ message: 'Awesome sauce - received burger layers!' })
// })

app.listen(PORT, () => { `server listening on port ${PORT}` })