import fetch from "node-fetch";

export const createPerson = async name => {
  try {
    const response = await fetch(
      process.env.CREATE_PERSON_API,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.KEY_AZURE,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
