const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            messageTwo.textContent = ''
            if (data.error) {
                messageOne.textContent = data.error
            } else {

                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
































// const urlgeocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
//     encodeURIComponent('Mudon') +
//     '.json?access_token=pk.eyJ1IjoicmFteXNhYWRtIiwiYSI6ImNrOThlampqNjE3MHczaW4xb3V0bGs4cmEifQ.6rwtyem8eudq_gE0L8hw_Q&limit=1'

// const urlfor1 = 'https://api.openweathermap.org/data/2.5/weather?lat='
// const urlfor2 = '&lon='
// const urlfor3 = '&appid=04301caa857872cb3712403ea2245403'


// fetch(urlgeocode).then((response) => {

//     response.json().then((dataGeo) => {



//         if (dataGeo.features.length == 0) {
//             return console.log('Error', 'Unable to find coordinates. Try another search ')
//         }

//         const urlforecast = urlfor1 + dataGeo.features[0].center[1] + urlfor2 +
//             dataGeo.features[0].center[0] + urlfor3
//         fetch(urlforecast).then((response) => {
//             response.json().then((data) => {
//                 console.log(data)
//                 const forecast = `${data.weather[0].description.charAt(0).toUpperCase() + 
//                     data.weather[0].description.slice(1)}. Temperature is ${
//                     (data.main.temp - 273).toFixed(1)} degrees out. It feels like ${
//                         (data.main.feels_like - 273).toFixed(1)
//                     } degrees.`
//                 console.log({
//                     forecast,
//                     location: dataGeo.features[0].place_name
//                 })
//             })
//         })
//     })
// })