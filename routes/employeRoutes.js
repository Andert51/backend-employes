import { Router } from "express"
import employeController from "../controllers/employeController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/login', employeController.loginEmploye)
router.post('/create', authMiddleware, employeController.createEmploye)
router.get('/get-all', authMiddleware, employeController.getEmploye)


export default router           