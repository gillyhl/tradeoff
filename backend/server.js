var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var axios = require('axios')

require('dotenv').config()

var app = express()

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

const CO2_PER_KM = {
  driving: 0.257,
  walking: 0,
  transit: 0.0602,
  bicycling: 0
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/directions', async (request, response) => {

  const { origin, destination, mode } = request.query
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=${process.env.GOOGLE_API_KEY}&alternatives=true`;
  const { data } = await axios.get(url)

  const parseRouteResult = routeResult => {

    const route = routeResult.routes[0]
    const leg = route.legs[0]

    return {
      start_address: leg.start_address,
      end_address: leg.end_address,
      distance: leg.distance,
      mode,
      duration: leg.duration,
      cost: Math.round((leg.distance.value / 1000) * PENCE_PER_KM[mode]),
      calories: Math.round((leg.distance.value / 1000) * CALORIES_PER_KM[mode]),
      co2: (leg.distance.value / 1000) * CO2_PER_KM[mode]
    }
  }

  response.json(parseRouteResult(data))

})

app.listen(3001)

