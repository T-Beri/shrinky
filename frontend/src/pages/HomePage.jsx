import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faScissors} from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {
  return (
    <div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Input URL:</h2>
            <div className="justify-center card-actions">
              <input type="text" placeholder="Type here" className="input" />
              <button className="btn btn-info mt-5"><FontAwesomeIcon icon ={faScissors}></FontAwesomeIcon></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage