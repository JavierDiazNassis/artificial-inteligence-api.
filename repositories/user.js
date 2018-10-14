import User from "../models/user";
import PicUser from "../models/picUser";
export const saveUser = async ({ name, personId }) => {
  try {
    const user = await User.insertMany({ name, personId });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async ({ imagesUrl, personId }) => {
  try {

    const image = await User.findOneAndUpdate(
      { personId },{
        $push:{ images: imagesUrl }
      }, { new: true }
      
    );

    return image;
  } catch (error) {
    console.log(error);
  }
};

