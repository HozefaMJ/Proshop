import express from "express";
const router = express.Router()

// Controllers
import {createdProductReview,
        createProduct,
        deleteProduct,
        getProductById, 
        getProducts, 
        updateProduct,
        getTopProducts
    } from "../controllers/productController.js";

// Models
//import Product from "../models/productModel.js";

// Middlerware
import {protect, admin} from "../middleware/authMiddleware.js";

router
    .route('/')
    .get(getProducts)
    .post(protect,admin,createProduct)

router
    .route('/top')
    .get(getTopProducts) //Error

router.route('/:id/reviews').post(protect,createdProductReview);

router
    .route('/:id')
    .get(getProductById)
    .delete(protect,admin,deleteProduct)
    .put(protect,admin,updateProduct)

export default router;