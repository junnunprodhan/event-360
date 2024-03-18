/* eslint-disable @typescript-eslint/no-explicit-any */
const singleImageUpload = async (image: any  ) => {
  console.log(image);
  try {
    if (image) {
      console.log(image);
      let uploaded: string = "";
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=f7959b2ff8c62b91e197a2b5f507eb13`;
      // const url = `https://api.imgbb.com/1/upload?key=490c17eb2cfede466a76631ea6586e94`;
  
  // 
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
      uploaded = data?.data?.url;
      return uploaded;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
};

export default singleImageUpload;