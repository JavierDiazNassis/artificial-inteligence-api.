import { 
  saveUser, 
  uploadImage, 
  updateUser, 
  findUrlImages,
  verifyUser,
  findAllUsers

} from "../repositories/user";
import { createPerson, Train } from "../services/azure";
import { uploadImages as saveImage, findByPicture } from "../services/heroku";

export const postUser = async (req, res) => {
  try {
    let { name, description } = req.body;

    //service
    let person = await createPerson(name);
    let { personId } = person;

    //repository
    const newUser = await saveUser({ name, personId });

    const newDesc = await updateUser({ id: newUser[0]._id, description });

    res.send(newDesc);
  } catch (error) {
    console.log(error);
  }
};

export const uploadImages = async (req, res) => {
  try {
    let { files } = req;
    let { personId } = req.body;
    let imagesUrl = await saveImage(files);
    await Train();

    let data = await uploadImage({ imagesUrl, personId });

    res.send(data);
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const searchPicture = async (req, res) => {
  try {
    let { files } = req;

    let data = await findByPicture(files);
    
    if(data[0].candidates){
      
      let { personId } = data[0].candidates[0];
      
      let imagesUrl = await findUrlImages({personId})
      res.send(imagesUrl);
    }
 
    res.send(data);
  } catch (error) {}
};

export const isUser = async(req,res)=>{
  try {
    const { personId } = req.query;
    const user = await verifyUser({personId});
    res.send(user);
  } catch (error) {
    console.log(error);
  } 
}

export const getAllUsers = async(req, res)=>{
  try {
    const users = await findAllUsers();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};


