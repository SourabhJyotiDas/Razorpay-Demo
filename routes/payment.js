import express from "express";
import { checkout, getApiKey, paymentVarification } from "../controllers/paymentController.js";

const router = express.Router()

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVarification);
router.route("/getkey").get(getApiKey);

export default router;