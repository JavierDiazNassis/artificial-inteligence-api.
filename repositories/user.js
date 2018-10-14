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

export const uploadImage = async ({ url, personId }) => {
  try {
    const image = await PicUser.insertMany({ url, personId });
    return image;
  } catch (error) {
    console.log(error);
  }
};

export const getImages = async ({personId}) => {
  try {
    const images = await PicUser.find({personId});
    return images;
  } catch (error) {
    console.log(error);
  }
};