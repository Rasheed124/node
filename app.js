const express = require('express')
const path = require('path')
const  mongoose = require('mongoose')

const blogRoutes =  require('./routes/blogRoutes.js')


const morgan = require('morgan')


const app = express()
// JksYMl2YePGEql37

const dbUri = `mongodb+srv://tolu123:JksYMl2YePGEql37@cluster0.srtv2oq.mongodb.net/node_class?retryWrites=true&w=majority`

// register a view engines
app.set('view engine', 'ejs')

// Connect to mongoDB
mongoose.connect(dbUri, {useNewUrlParser:true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch(err => console.log(err))


// morgan 
app.use(morgan('dev')) 

// custom  middleware (for compiling assets files)
app.use(express.static('public'))

// takes url encoded data that comes from the form and add it to the url object (req)
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.redirect('/blogs')
})


app.get('/about', (req, res) => {
  res.render("about",  {title: "About"})
})


// blog routes
app.use('/blogs', blogRoutes)



app.use((req, res) => {
    res.status(404).render('404',  {title: "404"})
})