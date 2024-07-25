import mongoose from "mongoose";



const studioSchema = new mongoose.Schema({
   model: {
        type: String,
        required: true,
        unique: true,
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

const Studio = mongoose.model("Studio",studioSchema);

export {Studio}