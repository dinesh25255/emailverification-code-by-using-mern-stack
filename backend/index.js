import express from 'express'
import dotenv from 'dotenv'
import dbCon from './libs/db.js'
import AuthRoutes from './routes/Auth.routes.js'


dotenv.config()

dbCon()


const PORT= process.env.PORT || 80000
const app=express()
app.use(express.json())
app.use('/auth',AuthRoutes)

app.listen(PORT,()=>{
    console.log("app is running on port ${PORT}")
})