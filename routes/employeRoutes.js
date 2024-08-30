import { Router } from "express"
import employeController from "../controllers/employeController.js"
// import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/login', employeController.loginEmploye)
router.post('/create',employeController.createEmploye)

export default router           