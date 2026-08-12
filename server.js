require('dotenv').config()
const express = require('express')
const cors = require('cors')
let app = express()
const { dbConnection } = require('./config/db')

dbConnection()
const routing = require('./routes/cntRouter')

app.use(express.json())
app.use(cors())
app.use('/api', routing)

const schema = require('./model/contactSchema')

app.get('/', (req, res) => {
    res.send("CONTACT APP")
})
app.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server running on port: ${process.env.PORT}`)
});










//steps of project:
//create package.json
//create a basic server
//connect database
//protect routes and port number: mongodb atlas
//schema design
//controller logic