import axios from "axios";
const BASE = "http://127.0.0.1:8000";

    
export const getRoles = async () => {
  const res = await axios.get(`${BASE}/api/v1/helpers/dropdownmaster/user-role/`);
  return res.data;
};

export const uploadImage = async (formData) => {
  const res = await axios.post(`${BASE}/api/v1/helpers/fileupload/`, formData);
  return res.data;
};

export const registerUser = async (data) => {
  return await axios.post(`${BASE}/api/v1/user/register/`, data);
};
