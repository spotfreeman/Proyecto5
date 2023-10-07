import { User } from '../Models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Traer listado de usuarios 
export const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el registro de Usuarios. ' })
    }
}

export const getUserByRut = async (req, res) => {
    try {
        const { rut } = req.params
        const getUser = await User.findOne({ rut: rut })
        res.status(200).json(getUser)
    } catch (error) {
        res.status(404).json({ message: ' No se encontro usuario. ' })
    }
}

export const singUp = async (req, res) => {
    try {
        // destructurar el const newUser para validar cada campo
        const { nombre, apellido, rut, correo, password } = req.body

        if (!nombre || !apellido || !rut || !correo || !password) {
            return res.status(400).json({ message: 'Debes completar los datos requeridos' })
        }

        const verifyUser = await User.findOne({ rut: rut })
        if (verifyUser) {
            return res.status(500).json({ message: 'El RUT ya existe.' })
        }

        const passwordEncrypt = await bcrypt.hash(password, 10)

        const user = new User({
            nombre,
            apellido,
            rut,
            correo,
            password: passwordEncrypt
        })

        const saveUser = await user.save()
        // Tiempo para que el Token dure 1 Hora
        const expireTime = Math.floor(new Date() / 1000) + 3600

        const token = jwt.sign({
            exp: expireTime,
            data: {
                id: _id,
                correo: correo,
                nombre: nombre,
                apellido: apellido
            }
        }, process.env.SECRET_KEY)


        res.status(201).json({
            message: `Usuario ${saveUser.nombre} ${saveUser.apellido} ha sido creado.`,
            token,
            user: saveUser
        })
    } catch (error) {
        res.status(500).json({ message: 'Error al logear.' })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { correo, password } = req.body

        const verifyUserCorreo = await User.findOne({ correo: correo })
        if (!verifyUserCorreo) {
            return res.status(404).json({ message: 'Este correo no existe.' })
        }

        const verifyPassword = await bcrypt.compare(password, verifyUserCorreo.password)
        if (!verifyPassword) {
            return res.status(403).json({ message: 'La contrasena es incorrecta.' })
        }

        // Tiempo para que el Token dure 1 Hora
        const expireTime = Math.floor(new Date() / 1000) + 3600

        const { _id, nombre, apellido } = verifyUserCorreo

        // importar jsonwebtoken 
        const token = jwt.sign({
            exp: expireTime,
            data: {
                id: _id,
                correo: correo,
                nombre: nombre,
                apellido: apellido
            }
        }, process.env.SECRET_KEY)

        res.json({ token, user: verifyUserCorreo })
    } catch (error) {
        res.status(403).json({ message: 'No se logro verificar cuenta. ' })
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

export const verifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.data.id).select('-password')
        res.json(user)
    } catch (error) {
        return res.status(500({ message: 'No se pudo verificar usuario.' }))
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



