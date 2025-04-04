const express = require("express")
const connectDB = require("./db")
const dotenv = require("dotenv").config()
const cors = require ("cors")
const morgan = require("morgan")
const authRouter = require("./routes/authRoutes")
const { handleExample } = require("./controllers/testCtrl")
const exampleRoutes = require("./routes/exampleRoutes")
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan())
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


app.use("/api", exampleRoutes)









app.use((request, response)=>{
   return response.status(400).json({message: "sorry, this endpoint doesn't exist"})
}) 