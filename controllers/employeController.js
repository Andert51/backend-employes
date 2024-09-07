import employeRepository from "../repositoires/employeRepo.js"
import authService from "../services/authService.js"

const employeController = {
    createEmploye: async (req, res) => {
        try {
            const employe = req.body
            employe.contrasena = authService.hashPassword(employe.contrasena)
            const created = await employeRepository.createEmploye(employe)
            const id = created.id
            res.status(201).json({
                succes: true,
                id
            })

        } catch (error) {
            res.status(500).json({  
                succes: false,
                message: error.message
            })
        }
    },
    loginEmploye: async (req, res) =>{
        try {
            const {correo, contrasena} = req.body
            const existMail = await employeRepository.getEmployeByMail(correo)
            if(!existMail){
                return res.status(404).json({
                    succes: false,
                    message: 'Employee does not exist'
                })
            }
            const employe = existMail.data()
            if(!authService.comparePassword(contrasena, employe.contrasena)){
                res.status(404).json({
                    succes: false,
                    message: 'Invalid Password'
                })
            }
            const token = authService.generateToken(employe)
            res.status(201).json({
                token
            })
        } catch (error){
            res.status(500).json({
                succes: false,
                message: error.message  
            })
        }
    },
    getEmploye: async (req, res) => {
        try {
            const employeDocs = await employeRepository.getEmployes()
            if (employeDocs.length === 0){
                return res.status(404).json({
                    succes: false,
                    message: 'No Employee Available'
                })
            }
            console.log('@Nint empleados => ', employeDocs) // Depuracion con los docs de firestore
            const employes = employeDocs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            return res.status(201).json({
                succes: true,
                message: employes
            })

        } catch (error) {
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    }
}


export default employeController

//Formato de /create
// {
//   "nombre": "Andres",
//   "apaterno": "Torres",
//   "amaterno": "Ceja",
//   "direccion": "Fimee",
//   "telefono": "3541018755",
//   "ciudad": "Salamanca",
//   "estado": "Guanauato",
//   "correo": "andert@gmail.com",
//   "noempleado": "1",
//   "contrasena": "123456",
//   "perfil": "andert"
// }