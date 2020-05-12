const express = require('express')

const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./route/user')
mongoose.connect(process.env.mongodb_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(userRouter)
app.listen(port,()=>{
    console.log("we are on " + port)
})





// 2.1) POST /api/users - Get new user via JSON FormData
// 2.2) GET /api/users - Get all users
// 2.3) GET /api/users/:id - Get user with id for e.g 52364db34
// 2.4) PUT /api/users/1 - Update user details with id 1 via JSON FormData
// 2.5) DEL /api/users/1 - Delete user with id 1