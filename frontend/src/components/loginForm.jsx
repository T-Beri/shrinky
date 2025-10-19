import React from 'react'
import {useState,useEffect} from "react";
import toast from "react-hot-toast"
import api from "../lib/axios";
import {useNavigate} from "react-router-dom"
import useAuthStore from '../store/authStore';

const LoginForm = () => {

  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  
  const { login } = useAuthStore();

  const navigate = useNavigate();

  

  const emailChange = (e)=>{
    setEmail(e.target.value);
  }

  const passChange = (e)=>{
    setPass(e.target.value);
  }

  const validate = async(e)=>{
    e.preventDefault();
    try{
      if(!email || !pass){
        toast.error("Enter valid email and password")
        return;
      }
      await login(email,pass);

      toast.success("Successfully logged in!");
      
      navigate("/home");

    }catch(error){
      toast.error("An error occurred")
      console.log(error);
    }
  }


  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" onChange={emailChange}/>

        <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" onChange={passChange}/>

        <button className="btn btn-neutral mt-4" onClick={validate}>Login</button>
    </fieldset>
  )
}

export default LoginForm