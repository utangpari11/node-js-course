const request = require('request')

const forecast = (lat,lon,callback) =>{
    //const url = 'http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query=40.7831,-73.9712'
    const url = 'http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query='+lat+','+lon
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to location server',undefined)            
        }else if(response.body.error){
            callback('unable to find location',undefined)            
        }else{
            const temp = response.body.current.temperature            
            const location = response.body.location.name
            callback(undefined,{
                temperature: temp,
                location: location
            })            
        }
        
    })
    console.log(url)
}


module.exports = forecast