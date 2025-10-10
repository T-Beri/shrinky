import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import {faScissors} from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {

  const [longUrl,changeUrl] = useState("");  
  const handleChange=(e)=>{
    changeUrl(e.target.value);
  }

  const shorten = ()=>{
    
  }

  return (
    <div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title">Input URL</h2>
            <div className="justify-center card-actions mt-3">
              <input type="text" placeholder="Type here" className="input" onChange={handleChange}/>
              <button className="btn btn-info w-full" onClick={shorten}><FontAwesomeIcon icon ={faScissors}></FontAwesomeIcon></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage