import express from 'express'
const router = express.Router()

import { getAllUser, createUser, updateUser, deleteUser, singUp, loginUser } from '../controllers/user.controller.js'

router.get('/users', getAllUser)
//router.post('/users', createUser) se comenta por que sino no funciona el encriptado de PASSWORD
router.put('/users/:rut', updateUser)
router.delete('/users/:rut', deleteUser)

router.post('/users', singUp)
router.post('/login', loginUser)



export default router