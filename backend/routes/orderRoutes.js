import express from "express";
const router = express.Router()

// CONTROLLERS
import {
    addOrderItems, getOrderById
} from "../controllers/orderController.js";

import {protect} from "../middleware/authMiddleware.js";

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)


export default router;