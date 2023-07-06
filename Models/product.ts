
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        required: true
    },
    quantity:{
        type:Number,
        default:0
    },
    price:{
        type: Number,
        require:true
    }
});
const Product = mongoose.model("Product", productSchema);
export {Product};
