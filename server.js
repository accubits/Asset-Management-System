var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/client' });
});
app.listen(8888);