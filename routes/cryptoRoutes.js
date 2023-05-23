import {
    createCrypto,
    deleteCrypto,
    getCryptos
} from '../controllers/cryptoController.js'
import express from "express";

const router = express.Router()
router.get('/', getCryptos)
router.post('/', createCrypto)
router.post('/delete', deleteCrypto)

export default router