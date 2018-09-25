var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var axios = require('axios');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/directions', async (request, response) => {

  const {origin, destination}=request.query
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyAWGw_OqX8KLR5HWQS7aryq9CVRdDw_BR4`;
  const {data} = await axios.get(url)

  response.json(data)

})

app.listen(3001)

