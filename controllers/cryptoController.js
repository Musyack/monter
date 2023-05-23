import Crypto from "../models/cryptoModel.js";
import asyncHandler from 'express-async-handler'
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";

const createCrypto = asyncHandler(async (req,res) => {
        const {name, address, icon, min} = req.body
        console.log(name)
        const crypto = await new Crypto({name, address, icon, min})

        const created = await crypto.save()
        res.status(201).json(created)
    })

const getCryptos = asyncHandler(async (req,res) => {
    const cryptos = await Crypto.find()

    res.status(201).json(cryptos)
})

const deleteCrypto = asyncHandler(async (req, res) => {
    const {name} = req.body
    const crypto = await Crypto.find({name})

    if (crypto) {
        const deleted = await Crypto.deleteOne({name})
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    createCrypto,
    deleteCrypto,
    getCryptos
}