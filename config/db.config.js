import mongoose from 'mongoose'

export const db = async () => {
    try {
        await mongoose.connect(process.env.DB_NAME, {

        })
        console.log('Conectado a Base de Datos.')
    } catch (error) {
        console.log(`No se logro conectar a la Base de Datos. ${error}`)
    }
}

