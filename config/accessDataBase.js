require('dotenv').config();
import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@ds131763.mlab.com:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connect mongoose done!");
  })
  .catch(err => console.log("-------------------------------->", err));

export default mongoose;
