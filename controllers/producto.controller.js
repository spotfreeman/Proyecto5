import { Producto } from '../Models/Producto.model.js'

export const getAllProductos = async (req, res) => {
    try {
        const allProductos = await Producto.find()
        res.status(200).json(allProductos)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro listado de Productos.' })
    }
}

export const getProductoById = async (req, res) => {
    try {
        const { id } = req.params
        const getProducto = await Producto.findById(id)
        res.status(200).json(getProducto)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el Producto especifico.' })
    }
}