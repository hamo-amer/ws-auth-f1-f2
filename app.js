const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const userRouters=require('./routes/auth')

connectDB()
app.use(express.json())


app.use('/api/user',userRouters)

const port=5000
app.listen(port,(err)=>{
    err ? console.log(err) :console.log(`server running on port ${port}`)
})