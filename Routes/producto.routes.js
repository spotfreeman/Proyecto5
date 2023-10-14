import express from 'express'
const router = express.Router()

import {
    deleteProductById,
    getAllProductos,
    getProductoById
} from '../controllers/producto.controller.js'

router.get('/productos', getAllProductos)
router.get('/productos/:_id', getProductoById)
router.delete('/productos/:_id', deleteProductById)


export default router