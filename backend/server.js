var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var axios = require('axios');

var app = express();

const PENCE_PER_KM = {
  driving: 25,
  walking: 0,
  transit: 150,
  bicycling: 1
}

const CALORIES_PER_KM = {
  driving: 0,
  walking: 75,
  transit: 0,
  bicycling: 150
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/directions', async (request, response) => {

  const {origin, destination, mode}=request.query
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=AIzaSyAWGw_OqX8KLR5HWQS7aryq9CVRdDw_BR4`;
  const {data} = await axios.get(url)

  const parseRouteResult = routeResult => {
    const route = routeResult.routes[0]
    const leg = route.legs[0]
    return {
      distance: leg.distance,
      mode,
      duration: leg.duration,
      cost: Math.round((leg.distance.value / 1000) * PENCE_PER_KM[mode]),
      calories: Math.round((leg.distance.value / 1000) * CALORIES_PER_KM[mode])
    }
  }

  response.json(parseRouteResult(data))

})

app.listen(3001)

