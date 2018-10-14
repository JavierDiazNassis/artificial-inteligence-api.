import mongoose from "../config/accessDataBase";
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  personId: String,
  description: Array,
  createdAt: { type: Date, default: new Date() },
  images: Array
});

export default mongoose.model("User", userSchema);
