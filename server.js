var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 8080;

app.get('/data/:mode/:id', function (req, res) {
    var fileName =  __dirname + "/data/" + req.params.mode + "/" + req.params.id + ".json";
    fs.readFile(fileName, 'utf8', function (err, data) {
        res.end( data );
    });
})

app.use(express.static(__dirname));

http.listen(port);
