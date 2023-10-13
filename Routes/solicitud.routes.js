import express from "express";
const router = express.Router()

import {
    getAllSolicitud,
    nuevaSolicitud,
    deleteSolicitud

} from '../controllers/solicitud.controller.js'

router.get('/solicitudes', getAllSolicitud)
router.post('/solicitud', nuevaSolicitud)
router.delete('/solicitud/:_id', deleteSolicitud)


export default router