import Crypto from "../models/cryptoModel.js";
import asyncHandler from 'express-async-handler'
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import Promocode from "../models/promocodeModel.js";

const createPromocode = asyncHandler(async (req,res) => {
    const {name, currency, balance} = req.body
    const promocode = await new Promocode({name, balance})

    const created = await promocode.save()
    res.status(201).json(created)
})

const getPromo = asyncHandler(async (req,res) => {
    const promos = await Promocode.find()

    res.status(201).json(promos)
})

const deletePromo = asyncHandler(async (req, res) => {
    const {name} = req.body
    console.log(name)
    const promocode = await Promocode.find({name: name})

    if (promocode) {
        const deleted = await Promocode.deleteOne({name})
        res.json({ message: 'Promo removed' })
    } else {
        res.status(404)
        throw new Error('Promo not found')
    }
})

export {
    createPromocode,
    deletePromo,
    getPromo
}