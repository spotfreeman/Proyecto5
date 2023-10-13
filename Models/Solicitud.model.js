import mongoose from "mongoose";
const Schema = mongoose.Schema

const solicitudSchema = new Schema({
    titulo: { type: String, require: true },
    descripcion: { type: String, require: true },
    nombre: { type: String, require: true }
}, { versionKey: false })

export const Solicitud = mongoose.model('solicituds', solicitudSchema)
