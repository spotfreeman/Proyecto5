import express from 'express'
import userRouter from './Routes/user.routes.js'
import { db } from './config/db.config.js'
import cors from 'cors'
import productoRouter from './Routes/producto.routes.js'

import dotenv from 'dotenv'
import { corsOptions } from './middlewares/cors.middleware.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Middlewares Cors
app.use(cors(corsOptions))
//Middlewares de rutas
app.use('/api/v1', userRouter)
app.use('/api/v1', productoRouter)



db()

app.listen(process.env.PORT, () => {
    console.log(`Servidor funcionando en puerto : ${process.env.PORT}`)
})