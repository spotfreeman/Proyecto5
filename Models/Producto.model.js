import mongoose from "mongoose";
const Schema = mongoose.Schema

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
    valor: { type: String, required: true },
    descripcion: { type: String, required: true },
    material: { type: String, required: true },
    img: { type: String }

}, { versionKey: false })

export const Producto = mongoose.model('productos', productoSchema)