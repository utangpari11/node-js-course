const express = require('express')
const app = express()

//to get www.app.com  -  those are called routes
app.get('',(req,res)=>{    
    res.send('Hello Express')
})
//to get www.app.com/help  -  new route
app.get('/help',(req,res)=>{
    res.send('Help Page')
})
//new /about route
app.get('/about',(req,res)=>{
    res.send('About Page')
})
//new /weather route
app.get('/weather',(req,res)=>{
    res.send('weather Page')
})

app.listen(3000,()=>{
    console.log('Server started on 3000')
})    