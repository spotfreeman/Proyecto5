import express from 'express'
const router = express.Router()

import { getAllUser, createUser, updateUser, deleteUser, singUp, loginUser, getUserByRut } from '../controllers/user.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

router.get('/users', authRequire, getAllUser)
//router.post('/users', createUser) se comenta por que sino no funciona el encriptado de PASSWORD
router.put('/users/:rut', authRequire, updateUser)
router.delete('/users/:rut', authRequire, deleteUser)

router.post('/users', singUp)
router.post('/login', loginUser)

router.get('/users/:rut', authRequire, getUserByRut)


export default router