const config = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('monk')(config.mongoConnString)
const showsCollection = db.get('shows')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

app.get('/shows', async (req, res) => {
    const shows = await showsCollection.find({})
    res.send(shows)
})

app.post('/shows', async (req, res) => {
    const newShow = req.body
    const savedShow = await showsCollection.insert(newShow)
    res.send(savedShow)
})

app.listen('3001', () => console.log('running on 3001'))