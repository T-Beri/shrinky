import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard, faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'


const GeneratedPage = () => {

  const [searchParams] = useSearchParams();

  const [copied,setCopied] = useState(false);
  const textToCopy=searchParams.get("short");
  const copy= ()=>{
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  return (
    <div className='card w-96 bg-base-100 shadow-sm '>
      <div className='flex justify-end'>
        {copied? <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>:<FontAwesomeIcon icon = {faClipboard} onClick={copy} className='cursor-pointer'></FontAwesomeIcon>}
        
      </div>
    </div>
  )
}

export default GeneratedPage