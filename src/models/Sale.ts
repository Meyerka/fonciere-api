import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    typeOfItem: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    location: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model("Sale", saleSchema);
