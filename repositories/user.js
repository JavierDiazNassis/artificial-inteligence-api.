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
export const updateUser = async ({ id, description }) => {
  try {
    const newDesc = await User.findOneAndUpdate(
      { _id: id },
      { $push: { description } },
      { new: true }
    );

    return newDesc;
  } catch (error) {
    console.log(error);
  }
};

export const verifyUser = async ({personId}) =>{
  try {
    const user = await User.findOne({ personId });
    if(!user)
      return {message:'User not found'}
    return user;
  } catch (error) {
    console.log(error);
  }
};
export const uploadImage = async ({ imagesUrl, personId }) => {
  try {
    const image = await User.findOneAndUpdate(
      { personId },
      {
        $push: { images: imagesUrl }
      },
      { new: true }
    );
    return image;
  } catch (error) {
    console.log(error);
  }
};

export const findUrlImages = async ({ personId }) => {
  try {
    const images = await User.findOne({ personId });
    if (!images) return { message: "User not found" };
    return images;
  } catch (error) {
    console.log(error);
  }
};

export const findAllUsers = async ()=>{
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
