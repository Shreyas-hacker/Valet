const express = require('express');
const path = require('path')
const app = express()

app.use(express.static(__dirname +'/public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('pages/home')
})
app.get('/booking',(req,res)=>{
    res.render('pages/form')
})
app.all('*',(req,res)=>{
    res.status(404).send('Error 404:Resource not found')
})
app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})