import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']
    const valid = token.split(' ') // Para eliminar el Bearer y dejar solo el token encriptado
    if (!valid[1]) {
        return res.status(500).json({
            success: false,
            message: 'No token provided'
        })
    }
    
    console.log('@Nint token =>', valid)

    jwt.verify(valid[1], process.env.SUPER_KEY, (err, decoded) => {
        if (err) {
            console.log('JWT error => ', err)
            return res.status(500).json({
                success: false,
                message: 'Invalid Token'
            })
        }
        req.body = decoded
        next()
    })
}

export default authMiddleware


//dotenv son variables para archivos por separado como claves, contrasenas, etc