import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'


const GeneratedPage = () => {
    const [copied,setCopied] = useState(false);

    const copy= ()=>{
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(()=>setCopied(false));
    };
  return (
    <div className='card w-96 bg-base-100 shadow-sm '>
        <div className='flex justify-end'>
            <FontAwesomeIcon icon = {faClipboard} onClick={copied} className='cursor-pointer'></FontAwesomeIcon>
        </div>
       
    </div>
  )
}

export default GeneratedPage