import express from "express";
const router = express.Router()

import {
    getAllSolicitud,
    nuevaSolicitud

} from '../controllers/solicitud.controller.js'

router.get('/solicitud', getAllSolicitud)
router.port('/solicitud', nuevaSolicitud)


export default router