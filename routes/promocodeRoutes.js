import {
    createPromocode,
    deletePromo,
    getPromo
} from '../controllers/promocodeController.js'
import express from "express";

const router = express.Router()
router.get('/', getPromo)
router.post('/', createPromocode)
router.post('/delete', deletePromo)

export default router