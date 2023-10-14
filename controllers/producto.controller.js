import { Producto } from '../Models/Producto.model.js'

export const getAllProductos = async (req, res) => {
    try {
        const allProductos = await Producto.find()
        res.status(200).json(allProductos)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro listado de PRODUCTOS.' })
    }
}

export const getProductoById = async (req, res) => {
    try {
        const { _id } = req.params
        const getProducto = await Producto.findById(_id)
        res.status(200).json(getProducto)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el PRODUCTO por ID.' })
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params.id
        const removeProduct = await Producto.findOneAndDelete({ id: id })

        if (!removeProduct) {
            return res.status(404).json({ message: `El producto ${removeProduct.nombre} no fue eliminado.` })

        }
        res.status(202).json({ message: 'Producto eliminado.' })

    } catch (error) {

    }
}
