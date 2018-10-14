import { saveUser } from "../repositories/user";
import { createPerson } from "../services/azure";
import { uploadImages as saveImage } from '../services/heroku';
export const postUser = async (req, res) => {
  try {
    
    let { name } = req.body;
  
    //service
    let person = await createPerson(name);
    let { personId } = person;

    //repository
    const newUser = await saveUser({ name, personId });
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const uploadImages = async (req, res) => {
  try {
    let { files } = req;
    
    let imagesUrl = await saveImage(files);
    res.send(imagesUrl);

  } catch (error) {
    console.log(error);
  }
};
