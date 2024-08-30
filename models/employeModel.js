import { db } from '../.config/firebase.js'

const employeModel = {
    getEmployeById: async (id) => {
        return db.collection('employe').doc(id).get()
    },
    getEmployeByMail: async (correo) => {
        const mail = await db.collection('employe').where('correo', '==', correo).get()
        if (mail.empty){
            return null
        }

        return mail.docs[0]
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