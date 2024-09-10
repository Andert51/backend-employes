//Enclaces, funciones asincronas esperan una respuesta del servidor para poder pasar a la siguiente linea, si no la tienen dan una promesa que es algo diferente
import employeModel from "../models/employeModel.js"

const employeRepository = {
    getEmployeById: async (id) => {
        await employeModel.getEmployeById(id)
    },
    getEmployeByMail: async (correo) => {
        return await employeModel.getEmployeByMail(correo)
    },
    createEmploye: async (employe) => {
        return await employeModel.createEmploye(employe)
    },
    updateEmploye: async (id, employe) => {
        await employeModel.updateEmploye(id, employe)
    },
    deleteEmploye: async (id) => {
        return await employeModel.deleteEmploye(id)
    },
    getEmployes: async () => {
       return await employeModel.getEmployes()
    }
}

export default employeRepository