var express = require('express');
var router = express.Router();
var Books = require('./books')

router.post('/', function (req, res){
    console.log(req.body);
    let b = new Books({
        name: req.body.name,
        author: req.body.author,
        date: req.body.date
    });
    b.save((err, bks) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(bks)
    });
})

router.get('/', function (req, res) {
    Books.find().exec((err, book) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(book)
    })
})

module.exports = router;