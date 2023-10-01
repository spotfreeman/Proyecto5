import express from 'express'
const router = express.Router()

import {
    getAllProductos,
    getProductoById
} from '../controllers/producto.controller.js'

router.get('/productos', getAllProductos)
router.get('/productos/:id', getProductoById)

export default router