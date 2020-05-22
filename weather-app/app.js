const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query=New%20York"
request({url: url}, (err, response)=>{
    const data = JSON.parse(response.body)
    console.log(data['current'].temperature)
    console.log(data['current'].precip)
})