// const request = require('request')
// const url = "http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query=New%20York"
// request({url: url}, (err, response)=>{
//     if(err){
//         console.log(err)
//     }else{            
//         const data = JSON.parse(response.body)
//         console.log(data['current'].temperature)
//         console.log(data['current'].precip)        


        
//     }
// })

/*
//Challenge
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXRhbmdwYXJpIiwiYSI6ImNrYWlmdjM5MDAwY3Aycm81bHJjYzl6NXUifQ.yRmWohVG1A1mmBJ3zj33yg&limit=1"
request({url:url2},(err,response)=>{
    const data = JSON.parse(response.body)
    const locationArr=data['features'][0].center
    console.log(locationArr[0]+" "+locationArr[1])
})
*/

//Learn Callback Abstraction ------
/*
const geocode = require('./utils/geocode')
geocode('New York',(error,data)=>{
    console.log('Data: ',data)
    console.log('Error: ',error)
})
geocode('Palo Altos',(error,data)=>{
    console.log('Data: ',data)
    console.log('Error: ',error)  
})
*/
//Challenge - utils/forecast.js

const forecast = require('./utils/forecast')
forecast(44.1545,-75.7088,(error,data)=>{
    console.log('Data: ',data)
    console.log('Error: ',error)
})

