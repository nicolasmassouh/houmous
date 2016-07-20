/**
 * Created by nico on 20/07/2016.
 */
var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8080,
    bodyParser = require('body-parser');

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.send('HOUMOUS TOUCH !');
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);