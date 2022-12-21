import express from 'express'
import 'dotenv/config'
import { ConfigureDb } from './src/config/connect.js'
import adminRouter from './src/router/AdminRouter.js'

const app = express()
app.use(express.json())
app.use(adminRouter)
ConfigureDb()
app.listen(1500 , ()=>{
    console.log("server is running at port " +1500);
})


