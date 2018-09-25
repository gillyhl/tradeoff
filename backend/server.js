var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/directions', (request, response) => {

  console.log('the parmas are', request.query)

  response.json({ params: request.query })

})

app.listen(3001)

