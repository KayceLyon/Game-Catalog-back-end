//  DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const session = require('express-session');


const gamesController = require('./controllers/gamesController')
// const userController = require('./controllers/userController')

app.use(express.json());
app.use(cors());

app.use('/games', gamesController)
// app.use('/users', userController)



let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
    console.log('WE ARE IN')
})

mongoose.connect('mongodb+srv://QGonz95:.ZybZjMEVB96uAj@sei.eg7suz6.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('linked to atlas')
})


