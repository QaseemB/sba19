import mongoose from "mongoose";


const instrumentSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    dimensions: {
        type: String,
        required: true,
    }
})

const Instruments = mongoose.model("Instruments",instrumentSchema);


export {Instruments}