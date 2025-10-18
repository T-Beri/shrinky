import { useState,useEffect } from "react"
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import {useNavigate} from "react-router-dom"
import api from "../lib/axios";

const AuthPage = () => {
    const [isLogin,setIsLogin] = useState(true);
    const navigate = useNavigate(); 

      


  return (
    <div className="auth-container flex items-center justify-center flex-col">
        {isLogin?<LoginForm />:<RegisterForm/>}
        <p className="mt-3">{isLogin?"Don't have an account?":"Already have an account?"}</p>
        <button onClick={()=>setIsLogin(!isLogin)} className="btn btn-soft mt-1">{isLogin?"Register":"Login"}</button>
    </div>
  )
}

export default AuthPage