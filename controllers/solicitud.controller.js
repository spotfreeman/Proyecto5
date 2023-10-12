import { Solicitud } from '../Models/Solicitud.model'

export const getAllSolicitud = async (req, res) => {
    try {
        const allSolitudes = await Solicitud.find()
        res.status(200).json(allSolitudes)
    } catch (error) {
        res.status(404).json({ message: 'No se encontraton las solicitudes' })
    }
}

export const nuevaSolicitud = async (req, res) => {
    try {
        const { titulo, descripcion, nombre } = req.body

        if (!titulo || !descripcion || !nombre) {
            return res.status(400).json({ message: 'Faltan datos para enviar solicitud. ' })
        }

        const solicitud = new Solicitud({
            titulo,
            descripcion,
            nombre
        })

        const saveSolicitud = await solicitud.save()

        res.status(201).json({
            solicitud: saveSolicitud
        })


    } catch (error) {

    }
}