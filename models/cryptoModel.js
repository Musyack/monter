import mongoose from 'mongoose'




const cryptoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        min: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Crypto = mongoose.model('Crypto', cryptoSchema)

export default Crypto
