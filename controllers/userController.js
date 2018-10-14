import { saveUser, uploadImage } from "../repositories/user";
import { createPerson } from "../services/azure";
import { uploadImages as saveImage } from "../services/heroku";

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
    let { personId } = req.body;
    let imagesUrl = await saveImage(files);
    
    
    let data = await uploadImage({ imagesUrl, personId });
    
    res.send(data);
  } catch (error) {
    res.status(404).send({error});
  }
};


  

