const express = require('express');
const router = express.Router();

const Games = require('../models/games')

// CREATE Game
router.post('/', (req, res)=>{
    Games.create(req.body, (err, createGame)=>{
        res.json(createGame)
    })
})

// INDEX OF Game
router.get('/', (req, res)=>{
    Games.find({}, (err, getGame)=>{
        res.json(getGame)
    })
})

// DISPLAY Game
router.get('/:id', (req, res)=>{
    Games.findById(req.params.id, (err, getGame)=>{
        res.json(getGame)
    })
})


// EDIT Game 
router.get('/:id/edit', (req, res)=>{
    Games.findById(req.params.id, (err, editGame)=>{
        res.json(editGame)
    })
})



/// UPDATE Game
router.put('/:id', (req, res)=>{
    Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateGame)=>{
        res.json(updateGame)
    })
})

//REMOVE Game
router.delete('/:id', (req, res)=>{
    Games.findByIdAndRemove(req.params.id, (err, deleteGame) =>{
        res.json(deleteGame)
    })
})

module.exports = router;
