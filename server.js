const express = require('express')
const renderer = require('ejs').renderFile
const {ProfileController,HomeController} = require('./controllers')
const PORT = process.env.PORT || 8080
const app = express()

app.engine('html', renderer)
app.set('view engine', 'html')


console.log(__dirname + '/images')
app.use(express.static('static'))
app.use('/img', express.static(__dirname + '/images'))

app.get('/', HomeController)
app.get('/:username', ProfileController)
app.listen(8080, () => {
	console.log(`server ready at localhost ${PORT}`)
})