import {Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import GeneratedPage from './pages/GeneratedPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import { useEffect, useState } from "react";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import useAuthCheck from './hooks/useAuthCheck';
import {Navigate} from "react-router-dom";
import useAuthStore from "../store/authStore.js";

const App = () => {
  const {isLoggedIn} = useAuthStore();
  

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-100'>
      <Routes>
        
        {!isLoggedIn && <Route path ="/" element={<AuthPage />}></Route>}
        
        <Route element={<ProtectedRoute />}>
          <Route path ="/" element={<Navigate to="/home"/>}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/gen" element={<GeneratedPage />} />
        </Route>
      </Routes>
    </div>
    
  )
}

export default App