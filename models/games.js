const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema =  new Schema ({
    title: String,
    developer: String,
    publisher: String,
    genre: String,
    image: String,
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game