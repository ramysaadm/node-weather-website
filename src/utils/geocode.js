const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?' +
        'access_token=pk.eyJ1IjoicmFteXNhYWRtIiwiYSI6ImNrOThlampqNjE3MHczaW4xb3V0bGs4cmEifQ.6rwtyem8eudq_gE0L8hw_Q&limit=1'

    //    console.log(url)
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find coordinates. Try another search.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                loc: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode