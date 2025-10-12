import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard, faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'
import toast from "react-hot-toast"

const GeneratedPage = () => {

  const [searchParams] = useSearchParams();

  const [copied,setCopied] = useState(false);
  const textToCopy=searchParams.get("short");

  const copy= ()=>{
    navigator.clipboard.writeText(textToCopy);
    toast.success("URL copied!")
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  return (
    <div className='card w-96 bg-base-100 shadow-sm p-4'>
      <div className='flex justify-between'>
        <h2 className="card-title">Your URL</h2>
        {copied? <FontAwesomeIcon icon={faClipboardCheck} className='text-xl'></FontAwesomeIcon>:<FontAwesomeIcon icon = {faClipboard} onClick={copy} className='cursor-pointer text-xl'></FontAwesomeIcon>}
      </div>
      <div className="card-body flex items-center text-white hover:underline truncate bg-gray-800 rounded-lg">
        <a href={textToCopy}>{textToCopy}</a>
      </div>
    </div>
  )
}

export default GeneratedPage