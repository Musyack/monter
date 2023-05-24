import mongoose from 'mongoose'




const promocodeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        balance: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Promocode = mongoose.model('Promocode', promocodeSchema)

export default Promocode
