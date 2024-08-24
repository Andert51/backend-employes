import express from 'express'
import employeRoutes from './routes/employeRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-type' , 'Authorization' ]
}

app.use(cors(corsOptions)) // Es para que de cualquier medio se pueda acceder a las consultas
app.use(express.json()) // Alternativa de body parser
app.use('/api/employe', employeRoutes) //Peticion del cliente al dominio para que el back responda

const PORT = process.env.PORT || 3020

app.listen(PORT, () => {
    console.log(`Server Running in port: ${PORT}`)
})