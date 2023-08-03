import React from 'react';
import axios from "axios";
import profileImage from "../Asset/profileImage.jpg";
import { useNavigate } from "react-router-dom"


export default function Card({ name, amount, img }) {

   const navigate = useNavigate()



   const checkoutHandler = async () => {

      const { data: { key } } = await axios.get("/api/v1/getkey")

      const { data } = await axios.post("/api/v1/checkout", {
         amount
      })

      const options = {
         key,
         amount: data.order.amount,
         currency: "INR",
         name: "SOURABH",
         image: profileImage,
         description: "Learing Razorpay Payment Integration",
         order_id: data.order.id,
         // callback_url: "/api/v1/paymentverification",

         handler: async function (response) {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            await axios.post("/api/v1/paymentverification", {
               razorpay_payment_id, razorpay_order_id, razorpay_signature,
            })
            navigate(`/paymentsuccess/${razorpay_payment_id}`)
         },

         prefill: {
            name: "John Doe",
            email: "johnDoe@gmail.com",
            contact: "0987654321"
         },
         notes: {
            "address": "RazorPay Corporate Office"
         },
         theme: {
            "color": "#121212"
         }

      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();



   };

   return (
      <div className="p-4 md:w-1/3">
         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
            <div className="p-6">
               <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{amount}</h2>
               <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
               <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
               <div className="flex items-center flex-wrap ">
                  <button className='bg-blue-500 p-3 text-white hover:bg-blue-800 ease-in-out transition-all duration-150 rounded-md'
                     onClick={checkoutHandler}
                  >CheckOut</button>
               </div>
            </div>
         </div>
      </div>
   )
}
