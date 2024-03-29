
import { instance } from "../server.js";
import crypto from "crypto";
import Payment from "../models/payment.js"

export const checkout = async (req, res) => {

   const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
   }

   const order = await instance.orders.create(options);

   res.status(200).json({
      success: true,
      order

   })
}

export const getApiKey = async (req, res) => {

   res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_API_KEY
   })
}


export const paymentVarification = async (req, res) => {

   try {
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

      const body = razorpay_order_id + "|" + razorpay_payment_id;

      const expectedSignature = crypto
         .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
         .update(body)
         .digest("hex");

      const isAuthentic = expectedSignature === razorpay_signature;

      if (isAuthentic) {

         // Save info to database
         await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
         })

         res.status(201).json({
            success: true,
           message: `Payment successfull on ${Payment._id}`
         });

      } else {
         res.status(500).json({
            success: false,
            message: "Payment Failed"
         })
      }
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}