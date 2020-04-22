const request = require('request')

const forecast = (lat, lon, callback) => {


    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=04301caa857872cb3712403ea2245403'
        //    console.log(url);
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)

        } else if (!body.main) {
            callback('Unable to find forecast for the provided coordinates location. Please enter another location!', undefined)
        } else {
            callback(undefined, {
                forecast: `${body.weather[0].description.charAt(0).toUpperCase() + 
                    body.weather[0].description.slice(1)}.Temperature is ${(body.main.temp - 273).
                        toFixed(1)} degrees out. It feels like ${(body.main.feels_like - 273).
                            toFixed(1)} degrees. The maximum temperature is ${(body.main.temp_max - 273).
                                toFixed(1)} and the minimum is ${(body.main.temp_min - 273).
                                    toFixed(1)}. The humidity is ${body.main.humidity}%.`



            })

        }
    })

}

module.exports = forecast