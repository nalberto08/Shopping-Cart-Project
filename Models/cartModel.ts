
import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    productId:{
        type : String,
        required: true
    },
    quantity:{
        type:Number,
        default:1
    },
    price:{
        type: Number,
        require:true
    }
});
const Cart = mongoose.model("Cart", cartSchema);
export {Cart};
