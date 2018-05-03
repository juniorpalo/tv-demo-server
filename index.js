const express = require('express')
const bodyParser = require('body-parser')

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

const inMemoryDatabase = {
    shows: [
        {
            name: 'Rick and Morty',
            rating: 5,
            newPreviewImage: 'https://static.posters.cz/image/750/plakaty/rick-and-morty-watch-i50046.jpg'
        },

        {
            name: 'Avatar the Last Airbender',
            rating: 2,
            newPreviewImage: 'https://ia.media-imdb.com/images/M/MV5BNzZlZmQyYTgtOWNmMy00NTNhLTgyOTYtNjhiOTllOGU2MDg5XkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_UY268_CR0,0,182,268_AL_.jpg'
        },

        {
            name: 'One Punch Man',
            rating: 4,
            newPreviewImage: 'https://www.rightstufanime.com/images/productImages/699858578788_merchandise-saitame-genos-one-ounch-man-throw-blanket-primary.jpg?resizeid=3&resizeh=600&resizew=600'
        },

        {
            name: 'Daredevil',
            rating: 5,
            newPreviewImage: 'https://ia.media-imdb.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },

        {
            name: 'Ash vs Evil Dead',
            rating: 5,
            newPreviewImage: 'http://assets.starz.com/imgix/OriginalsPicker/eds2_598x336_v2.jpg'
        }

    ]
}

app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body
    inMemoryDatabase.shows.push(newShow)
    res.send(newShow)
})

app.listen('3001', () => console.log('running on 3001'))