import express from "express";
const router = express.Router()

import { getAllProductos, getProductoById } from '../controllers/producto.controller.js'

router.get('/producto', getAllProductos)
router.get('/producto/:id', getProductoById)

export default router