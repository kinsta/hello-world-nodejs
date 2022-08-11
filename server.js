require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
