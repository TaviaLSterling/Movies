let express = require('express')
let bodyParser = require('body-parser')
let server = express()
let movies = require('./movies')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
//create an endpoint for getting a list of movies
server.get('/movies', (req,res,next) => {
    res.send(movies)
})
//create an endpoint for finding a movie by its index
server.get('/movies/:id', (req,res,next) => {
  
        res.send(movies[req.params.id])

    return res.status(400).send({
        error: 'no movie found'
    })
})
//create an endpoint for finding a movie by its title
server.get('/movies/title/:title', (req, res, next) => {
    let movie = movies.find(m => m.name == req.params.title)
    if (movie) {
      return res.send(movie)
    }
    return res.status(400).send({
      error: 'no movie'
    })
  })
  
  //create an endpoint for finding all movies by their years
  server.get('/movies/year/:year', (req, res, next) => {
    let movie = movies.find(m => m.year == req.params.year)
    if (movie) {
      return res.send(movie)
    }
    return res.status(400).send({
      error: 'no movie'
    })
  })
  //create an endpoint for finding all by rating
  server.get('/movies/rating/:rating', (req, res, next) => {
    let movie = movies.find(m => m.rating == req.params.rating)
    if (movie) {
      return res.send(movie)
    }
    return res.status(400).send({
      error: 'no movie'
    })
  })
  //create an endpoint for finding all by tags
  server.get('/movies/tags/:tag', (req, res, next) => {
    let movie = movies.find(m => m.tag == req.params.tags)
    if (movie) {
      return res.send(movie)
    }
    return res.status(400).send({
      error: 'no movie'
    })
  })
  
  
  
  
  
  
  server.listen(3000, () => {
    console.log("Movies can be found at port: ", 3000)
  })