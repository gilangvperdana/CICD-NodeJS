const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/hello', (req,res) => res.send('Hello, Indonesia!'))
app.get('/', (req,res) => res.send('Ini Updatean baru tanpa nyentuh VPS'))
app.get('/ping', (req,res) => res.send('Pongs!'))
app.get('/hellos/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
