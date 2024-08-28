import employeRepository from "../repositoires/employeRepo.js"
import authService from "../services/authService.js"

const employeController = {
    createEmploye: async (req, res) => {
        try {
            const employe = req.body
            employe.contrasena = authService.hashPassword(employe.contrasena)
            const created = await employeRepository.createEmploye(employe)
            res.status(201).json({
                succes: true,
                id: created.id
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
            const existMail = await employeRepository.getEmployeById(correo)
            if(!existMail.exist){
                res.status(404).json({
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
                succes: true,
                message: token
            })
        } catch (error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    }
}

export default employeController