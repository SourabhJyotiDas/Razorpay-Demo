import mongoose from "mongoose";

export const connectToDb = () => {
   mongoose.connect(process.env.MONGO_URI).then((ele) => {
      console.log(`Mongoose Connected: ${ele.connection.host}`);
   }).catch((err) => {
      console.log(err.message);
   })
}