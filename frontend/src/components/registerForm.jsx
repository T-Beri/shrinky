import {useState} from "react";
import toast from "react-hot-toast"
import api from "../lib/axios";
import {useNavigate} from "react-router-dom"




const RegisterForm = () => {
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const [passcopy,setPassCopy] =useState();
    const [name,setName] = useState();

    const navigate = useNavigate();

    const nameChange = (e)=>{
        setName(e.target.value);
    }

    const emailChange = (e)=>{
        setEmail(e.target.value);
    }

    const passChange = (e)=>{
        setPass(e.target.value);
    }
    
    const passcopyChange = (e)=>{
        setPassCopy(e.target.value);
    }

    const register = async(e)=>{
        e.preventDefault();
        try{
            if(!email || !pass || !name || !passcopy){
                toast.error("Must fill in all fields")
                return;
            }
            if(pass!== passcopy){
                toast.error("Passwords do not match")
                return;
            }
            const promise = api.post("/auth/register",{name:name,email:email,password:pass},{ withCredentials: true });

            const res = await toast.promise(promise,{
                loading:"Registering your account...",
                success:"Successfully registered!"
            }
        );
        navigate("/home");

        }catch(error){
            toast.error("An error occurred")
            console.log(error);
        }
    }

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
            <input type="name" className="input" placeholder="Name" onChange={nameChange}/>

        <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" onChange={emailChange}/>

        <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" onChange={passChange}/>

        <label className="label">Enter Password Again</label>
            <input type="password" className="input" placeholder="Password" onChange={passcopyChange}/>

        <button className="btn btn-neutral mt-4" onClick={register}>Register</button>
    </fieldset>
  )
}

export default RegisterForm