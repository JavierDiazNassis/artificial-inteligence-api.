import FormData from "form-data";
import fetch from "node-fetch";
import { Train } from './azure'

export const uploadImages = async files => {
  try {
    let formData = new FormData();

    files.map(value => {
      formData.append("files", value.buffer, value.originalname);
    });

    const response = await fetch(process.env.UPLOAD_IMAGE_API, {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    Train();
    return data;
  } catch (error) {
    return error
  }
};
