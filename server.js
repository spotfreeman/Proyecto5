import express from 'express'
import userRouter from './Routes/user.routes.js'
import { db } from './config/db.config.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Middlewares de rutas
app.use('/api/v1', userRouter)

db()

app.listen(process.env.PORT, () => {
    console.log(`Servidor funcionando en puerto : ${process.env.PORT}`)
})