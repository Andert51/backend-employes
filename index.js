import express from 'express'
import employeRoutes from './routes/employeRoutes.js'

const app = express()

app.use(express.json()) // Alternativa de body parser
app.use('/api/employe', employeRoutes) //Peticion del cliente al dominio para que el back responda

const PORT = process.env.PORT || 3020

app.listen(PORT, () => {
    console.log(`Server Running in port: ${PORT}`)
})