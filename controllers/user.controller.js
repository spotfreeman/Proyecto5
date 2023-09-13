import { User } from '../Models/User.model.js'
import bcrypt from 'bcrypt'

//Traer listado de usuarios 
export const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el registro de Usuarios. ' })
    }
}

// Crear Usuario
export const createUser = async (req, res) => {
    try {
        // Creamos una constante para el nuevo USUARIO
        const newUser = req.body
        const user = new User(newUser)
        const saveUser = await user.save()

        res.status(201).json({ message: `Usuario ${saveUser.nombre} ${saveUser.apellido} creado satisfactoriamente.` })

    } catch (error) {
        res.status(400).json({ message: 'No se logro crear usuario.' })
    }
}

export const updateUser = async (req, res) => {
    try {
        const userRut = req.params.rut
        const updateData = req.body
        //Buscamos el usuario para Actualizar
        const updateUser = await User.findOneAndUpdate({ rut: userRut }, updateData, { new: true })
        if (!updateUser) {
            return res.status(404).json({ message: 'No se encontro usuario para actualizar. ' })
        }

        res.status(202).json({ message: `El usuario ${updateUser.nombre} ${updateUser.apellido} fue actualizado con exito. ` })

    } catch (error) {
        res.status(500).json({ message: `No fue posible actualizar el usuario. ` })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userRut = req.params.rut
        const removeUser = await User.findOneAndDelete({ rut: userRut })

        if (!removeUser) {
            return res.status(404).json({ message: 'No se pudo eliminar usuario.' })
        }
        res.status(202).json({ message: `El usuario ${removeUser.nombre} ${removeUser.apellido} fue eliminado.` })
    } catch (error) {
    }
}

export const singUp = async (req, res) => {
    try {
        const { nombre, apellido, rut, edad, correo, password } = req.body
        if (!nombre || !apellido || !rut || !edad || !correo || !password) {
            res.status(400).json({ message: 'Debes completar los datos requeridos' })
        }

        res.status(201).json({ message: `` })

    } catch (error) {
        res.status(500).json({ message: 'Error al logear.' })
    }
}