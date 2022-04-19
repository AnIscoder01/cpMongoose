const express=require('express')

const connectDB=require('./config/connectDB')
const personRoute=require('./routes/person')
const app=express()

// connection with database
connectDB()

app.use(express.json())

app.use('/api',personRoute)



const port = 8000

app.listen(port,(err)=>err?console.log('error connect to server') :console.log('server is connected '))