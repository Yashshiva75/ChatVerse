const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.db_Uri || 5000

const Db_connection= ()=>{
    mongoose.connect(db).then(()=>{
    console.log("Db connected")
}).catch((error)=>{
     console.log("error in connecting db",error.message)
})
}

module.exports = Db_connection