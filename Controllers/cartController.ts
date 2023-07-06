

import { Cart } from "../Models/cartModel";
import { Product } from "../Models/product";

const createCart = async (req: any, res: any): Promise<any> => {

     try {
          const data = req.body
          const found = await Product.findOne({ productId: data.name })
          if (!found) {
               res.status(409).json({
                    message: "this product is not available"
               })
          } else {
               const productId = found.productName
               const quantity = found.quantity
               const price= found.price
               res.status(200).json({
                    message: " product added successfully on cart", productId, quantity, price
               })

               const selected = new Cart({
                    productId: found,
                    quantity: quantity,
                    price: price
               })
               selected.save()
          }

     } catch (e) {
          console.log("the error when we adding product to cart:", e)

     }

}

const getCart = async (req: any, res: any): Promise<any> => {
     try {
          const theCart = await Cart.find({})
          console.log("all products in cart")
          res.status(200).json({
               message: "This is all product", theCart
          })

     } catch (e) {
          console.log("THis is the error:", e)
          res.status(400).json({
               message: "error while viewing all carts", e
          })

     }

}
const deleteCart = async (req: any, res: any): Promise<any> => {
     try {
          const data = req.body
          const found = await Cart.findOne({ name: data.name })
          if (!found) {
               res.status(409).json({
                    message: "this products is not available", found
               })
          } else {
               const id = found._id
               await Cart.deleteOne({ _id: id })
               res.status(200).json({
                    message: "the product is deleted", id
               })
          }
     } catch (e) {
          console.log("error occured while deleting:", e)

     }
}

const updateCart = async (req: any, res: any): Promise<any> => {

     try {
          const data = req.body;
          const found = await Cart.findOne({ name: data.name });
          if (!found) {
               res.status(409).json({
                    message: "This product is not available",
                    found,
               });
          } else {
               const price: any = found.price;
               const currentQuantity: any = found.quantity;
               const newQuantity = currentQuantity + 1;
               const newTotalAmount = newQuantity * price;
               
               let updatedData = {
                    ...data,
                    Quantity: newQuantity,
                    total_price: newTotalAmount
               }
               res.status(200).json({
                    message: " data updated successfully on cart", updatedData
               })
               console.log("data updated", updatedData)
          }
     } catch (error) {
          console.log("Error occurred while updating the cart", error);
     }
};

export { createCart, getCart, deleteCart, updateCart}
