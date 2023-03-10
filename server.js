require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
