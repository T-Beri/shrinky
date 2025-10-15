import React from 'react'
import {Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import GeneratedPage from './pages/GeneratedPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import useAuthCheck from './hooks/useAuthCheck';

const App = () => {
  const { isLoggedIn } = useAuthCheck();
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-100'>
      <Routes>
        <Route path ="/" element={<AuthPage/>}></Route>

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/gen" element={<GeneratedPage />} />
        </Route>
      </Routes>
    </div>
    
  )
}

export default App