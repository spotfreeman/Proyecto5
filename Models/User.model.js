import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rut: { type: String, required: true },
    correo: { type: String, required: true },
    password: { type: String, required: true }

}, { versionKey: false })

export const User = mongoose.model('users', userSchema)