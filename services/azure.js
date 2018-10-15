import fetch from "node-fetch";

const HttpData = (method, content_type, body = undefined) => {
  return {
    method:method,
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.KEY_AZURE,
      "Content-Type": content_type
    },
    body:body
  }
}

export const createPerson = async name => {
  try {
    const response = await fetch(
      process.env.CREATE_PERSON_API,
      HttpData(
        "POST",
        "application/json",
        JSON.stringify({ name })),
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Train = async () => {

  try {
    const response = await fetch(
      process.env.TRAIN,
      HttpData(
        "POST",
        "application/json",
        {})
    );
    
  
    
   
  } catch (error) {
    console.log(error);
  }
};

export const Trainning = async () => {
  try {
    const response = await fetch(
      process.env.TRAINNING,
      HttpData(
        "GET",
        "application/json"
      ),
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const AddFace = async (imagesUrl, id) =>{
  try {
    
    const response = 
    await fetch(
      `https://eastus.api.cognitive.microsoft.com/face/v1.0/largepersongroups/ia-group/persons/${id}/persistedfaces`,
      {
        method:'POST',
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.KEY_AZURE,
          "Content-Type": "application/json"
        },
        body:JSON.stringify({url:imagesUrl})
          
      }
    )
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
