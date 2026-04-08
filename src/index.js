const express = require('express')
const { create } = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const hbs = create({ 
  extname: '.hbs'
})
const { engine } = hbs

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/house', (req, res) => {
  res.render('house')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
