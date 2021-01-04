import express from "express";
const router = express.Router()

// Controllers
import { deleteProduct, getProductById, getProducts } from "../controllers/productController.js";

// Models
//import Product from "../models/productModel.js";

// Middlerware
import {protect, admin} from "../middleware/authMiddleware.js";

router.route('/').get(getProducts)

router
    .route('/:id')
    .get(getProductById)
    .delete(protect,admin,deleteProduct)



export default router;