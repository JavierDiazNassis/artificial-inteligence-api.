import mongoose from '../config/accessDataBase';
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name:  String,
    personId: String
});

export default mongoose.model('User', userSchema);