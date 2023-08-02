import app from "./app.js";
import razorpay from "razorpay"


export const instance = new razorpay({
   key_id: process.env.RAZORPAY_API_KEY,
   key_secret: process.env.RAZORPAY_API_SECRET
})


app.listen(process.env.PORT, () => {
   console.log(`Connection successfully on port http://localhost:${process.env.PORT}`);
});