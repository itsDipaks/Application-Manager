import React from "react";
import googlebtn from "../assets/Login Google.png";
import axios from "axios"
const Login = () => {

let loginwithgoogle=async()=>{
try{
    let login=await axios.get("http://localhost:8400/auth/google")

    console.log(login)
}catch(err){
console.log(err)
}



}
  return (
    <div>
      <img onClick={loginwithgoogle} src={googlebtn} alt="" />
    </div>
  );
};

export default Login;
