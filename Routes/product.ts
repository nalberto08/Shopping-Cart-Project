
import express from "express";
import {getProduct,createProduct, removeProduct } from "../Controllers/product"

const router = express.Router();
router.get("/getProduct",getProduct);
router.post("/addProduct",createProduct)
router.delete("/removeProduct", removeProduct)

 export {router};