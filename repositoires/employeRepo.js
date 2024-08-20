//Enclaces, funciones asincronas esperan una respuesta del servidor para poder pasar a la siguiente linea, si no la tienen dan una promesa que es algo diferente
import employeModel from "../models/employeModel.js"

const employeRepository = {
    getEmployeById: async (id) => {
        await employeModel.getEmployeById(id)
    },
    createEmploye: async (employe) => {
        await employeModel.createEmploye(employe)
    },
    updateEmploye: async (id, employe) => {
        await employeModel.updateEmploye(id, employe)
    },
    deleteEmploye: async (id) => {
        await employeModel.deleteEmploye(id)
    }
}

export default employeRepository