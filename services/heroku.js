import FormData from "form-data";
export const uploadImages = async files => {
  try {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i]["name"]);
    }
    const response = await fetch(process.env.UPLOAD_IMAGE_API, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
