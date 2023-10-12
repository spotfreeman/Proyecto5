import express from 'express'
const router = express.Router()

import {
    getAllProductos,
    getProductoByCodigo,
    getProductoById
} from '../controllers/producto.controller.js'

router.get('/productos', getAllProductos)
router.get('/productos/:id', getProductoById)
router.get('/productos/:codigo', getProductoByCodigo)

export default router