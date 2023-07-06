

import { Product } from "../Models/product";

const createProduct= async(req:any,res:any):Promise<any>=>{
    try {
        const data = await Product.create(req.body);
        console.log ("Product added to database successfully");

        res.status(200).json(data)
    } catch (error) {
         console.log ("error occured while adding product", error)   
    }
};
const getProduct= async (req:any,res:any):Promise<any>=>{
     try {
          const data = await Product.find({});
          console.log("product retreived successfuly");
          res.status(200).json(data)
     } catch (error) {
        console.log ("error occured while retreiving products", error)  
     }
};
const removeProduct = async (req: any, res: any): Promise<any> => {
    try {
         const data = req.body
         const found = await Product.findOne({ name: data.name })
         if (!found) {
              res.status(409).json({
                   message: "this products is not available", found
              })
         } else {
              const id = found._id
              await Product.deleteOne({ _id: id })
              res.status(200).json({
                   message: "the product is deleted", id
              })
         }
    } catch (e) {
         console.log("error occured while deleting:", e)

    }
}

export {getProduct, createProduct, removeProduct}