
import express from "express";
import {createCart,getCart, deleteCart,updateCart } from "../Controllers/cartController"

const router =  express.Router();
router.post("/addcart", createCart);
router.get("/getCart", getCart);
router.delete("/deleteCart", deleteCart);
router.put('/updateCart', updateCart)
export {router};
