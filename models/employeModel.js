import { db } from '../.config/firebase.js'

const employeModel = {
    getEmployeById: async (id) => {
        return db.collection('employe').doc(id).get()
    },
    createEmploye: async (employe) => {
        return db.collection('employe').add(employe)
    },
    updateEmploye: async (id, employe) => {
        return db.collection('employe').doc(id).update(employe)
    },
    deleteEmploye: async (id) => {
        return db.collection('employe').doc(id).delete()
    }
    
}

export default employeModel