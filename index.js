require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.get('/twiter', (req,res) =>{
    res.send('naveenmaddy')
})

app.get('/login', (req,res) =>{
    res.send('<h1> please login </h1>')
})

app.listen(process.env.PORT, () =>{
    console.log(`example app listening on port ${port}`)
})