import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Input URL:</h2>
            
            <div className="justify-center card-actions">
              <input type="text" placeholder="Type here" className="input" />
              <button className="btn btn-info mt-5">Shorten</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage