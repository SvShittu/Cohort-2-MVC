const express = require("express")
const connectDB = require("./db")
const dotenv = require("dotenv").config()
const authRouter = require("./routes/authRoutes")

const app = express()

app.use(express.json())
//Database
connectDB()
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{
    console.log(`Server Started Running on port ${PORT}`)

     
})

app.get("/",(request, response)=>{
    return response.status(200).json({message: "welcome to our server."})
})

app.use("/api",authRouter)