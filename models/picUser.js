import mongoose from '../config/accessDataBase';
const Schema = mongoose.Schema;

let picUserSchema = new Schema({
    url:  String,
    personId: { type:Schema.ObjectId, ref:'User' },
});

export default mongoose.model('PicUser', picUserSchema);