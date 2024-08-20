import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(500).json({
            success: false,
            message: 'No token provided'
        })
    }
    
    jwt.verify(token, process.env.SUPER_SECRET, (err, decoded) => {
        if (err) {
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