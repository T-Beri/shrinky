import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import {faScissors} from '@fortawesome/free-solid-svg-icons'
import toast from "react-hot-toast"
import api from "../lib/axios";
import {useNavigate} from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate();

  const [longUrl,changeUrl] = useState("");  

  const handleChange=(e)=>{
    changeUrl(e.target.value);
  }

  const shorten = async (long)=>{
    if(!long){
      toast.error("No URL provided!",{icon: "💀"});
      return;
    }
    
    
    try{
      const promise = api.post("/url",{url:long});

      const res = await toast.promise(promise,{
          loading:"Creating Short URL...",
          success:"Short URL created!"
        }
      );
     
      const shortURL = res.data.shortUrl;
      navigate(`/gen?short=${shortURL}`);

    }catch(error){
      console.log(error);
    }
    
    
  }

  return (
    <div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title">Input URL</h2>
            <div className="justify-center card-actions mt-3">
              <input type="text" placeholder="Type here" className="input" onChange={handleChange}/>
              <button className="btn btn-info w-full" onClick={()=>shorten(longUrl)}><FontAwesomeIcon icon ={faScissors}></FontAwesomeIcon></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage