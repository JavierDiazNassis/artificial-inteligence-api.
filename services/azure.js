import fetch from "node-fetch";

const HttpData = (method, content_type, body) => {
  return {
    method: method,
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.KEY_AZURE,
      "Content-Type": content_type
    },
    body: body
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
    const data = await response.json();
    Trainning();
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
        "application/json",
        {}),
    );
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

