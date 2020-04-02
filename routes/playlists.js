var express = require('express');
var router = express.Router();

var playlists = [];

router.get('/', function(req, res, next) {
    res.send(playlists);
});

router.post('/', (req, res) => {
    const {playlist} = req.body;
    playlists.push(playlist);
    res.send(Response.ok);
});

router.delete('/', (req, res) => {
    const {playlist} = req.body;
    playlists = playlists.filter(each => each !== playlist);
    res.send(Response.ok);
});

module.exports = router;
