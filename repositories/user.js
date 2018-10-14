import User from "../models/user";

export const saveUser = async ({ name, personId }) => {
  try {
    const user = await User.insertMany({ name, personId });
    return user;
  } catch (error) {
    console.log(error);
  }
};
