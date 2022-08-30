//Register

import axios from "axios";
import authHeader from "./authHeader";

const register = async (userData) => {
  const response = await axios.post("register", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//login

const login = async (userData) => {
  const response = await axios.post("login", userData, authHeader());
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", response.data.token)
  }
};

const logout=()=>{
    localStorage.removeItem("user");
}


//All Products
const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products", {
      headers: authHeader(),
    });
    console.log(response.data)
  return response.data
    
  };

const authServices = {
  register,
  login,
  logout,
  getProducts

};
export default authServices;
