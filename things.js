var express = require('express');
var router = express.Router();

// Handling HTTP GET requests
router.get('/', function(req, res){
    res.send("Hello ");
});

// Handling HTTP POST requests
router.post('/', function(req, res){
    res.send("Hello rakamin from post");
});

// Handling HTTP PUT requests
router.put('/', function(req, res){
    res.send("Hello from put");
});

module.exports = router;
