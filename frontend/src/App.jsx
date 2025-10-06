import React from 'react'
import {Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <Routes>
        <Route path ="/" element={<HomePage/>}></Route>
      </Routes>
    </div>
    
  )
}

export default App