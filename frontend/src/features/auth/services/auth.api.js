import axios from "axios";

const authApiInstance = axios.create({
  baseURL: "/api/auth",
  withCredentials: true,
});


export async function register({
  username,
  email,
  password,
  phone,
  location,
}) {

  const response = await authApiInstance.post("/register", {
    username,
    email,
    password,
    phone,
    location,
  });

  return response.data;
}


export async function login({
  
}) {
  
}