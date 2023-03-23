const express = require('express')
const mongoose = require('mongoose')
const dotenv = require ('dotenv').config()
const bodyParser = require('body-parser')


const app = express()
const workoutRouts = require('./routes/workouts')
app.use(bodyParser.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
    
}) 
//app.use(dotenv)
// routs
app.use('/api/workouts',workoutRouts)


app.listen(3000,() =>{
  console.log('app listening port 3000!!!!')
})

//MONGO_URI = 'mongodb+srv://aa:aa@cluster0.ls2fcwd.mongodb.net/?retryWrites=true&w=majoritys';

// connect mongo
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('database connected!!')
    })
    .catch((error) => {
      console.log(error)
    })
