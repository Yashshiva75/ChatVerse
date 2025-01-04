const express = require('express')
const Db_connection = require('./Db/Db_connect')
require('dotenv').config()
PORT = process.env.PORT

const app = express()
    

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

//Data base
Db_connection();
