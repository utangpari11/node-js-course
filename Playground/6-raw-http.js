const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query=45,-75&units=f'

const request = http.request(url,(response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        console.log(chunk)
        data = data + chunk.toString()        
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body.location)
    })
    
})
request.on('error',(error)=>{
    console.log('An error',error)
})
request.end()