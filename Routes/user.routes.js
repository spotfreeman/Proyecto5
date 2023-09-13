import express from 'express'
const router = express.Router()

import { getAllUser, createUser, updateUser, deleteUser, singUp } from '../controllers/user.controller.js'

router.get('/users', getAllUser)
router.post('/users', createUser)
router.put('/users/:rut', updateUser)
router.delete('/users/:rut', deleteUser)

router.post('/users', singUp)



export default router