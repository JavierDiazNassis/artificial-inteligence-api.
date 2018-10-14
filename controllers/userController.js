import { saveUser } from "../repositories/user";
import { createPerson } from "../services/azure";

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
