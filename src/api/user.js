import axios from "axios";
import { BASE_URL } from "../constants/endpoints";


export const getRoles = async () => {
  const res =  await axios.get(`${BASE_URL}/helpers/dropdownmaster/role/`);
  return res.data; //  return only the data array
};

// export const uploadProfilePic = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);

//   const res = await axios.post(`${BASE_URL}/helpers/fileupload/`, formData);
//   return res.data?.id;
// };

export const uploadProfilePic = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${BASE_URL}/helpers/fileupload/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data?.id;
};

export const registerUser = async (payload) => {
    // console.log("Calling register API with:", payload);
  return await axios.post(`${BASE_URL}/user/register/`, payload);
};



export const loginUser = async (payload) => {
  // console.log("Calling login API with:", payload);
  return await axios.post(`${BASE_URL}/user/login/`, payload);
};


export const contactUs = async (payload) => {
  // console.log("Calling contactus API with:", payload);
  return await axios.post(`${BASE_URL}/helpers/contactus/`, payload);
};



 



