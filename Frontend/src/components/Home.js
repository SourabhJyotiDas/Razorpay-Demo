import React from 'react';
import Card from './Card';
import img1 from "../Asset/img1.jpg"
import img2 from "../Asset/img2.webp"
import img3 from "../Asset/img3.jpg"


export default function Home() {
   return (
      <div>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <div className="flex flex-wrap -m-4">

                  <Card name={"Samsung Z-flip"} amount={3} img={img1} />
                  <Card name={"Ipad Pro"} amount={8} img={img2} />
                  <Card name={"Iphone XR"} amount={5} img={img3} />

               </div>
            </div>
         </section>
      </div>
   )
}
