import { useState, useEffect } from "react";
import api from "../lib/axios";

const useAuthCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuth = async() => {
      try {
        const res = await api.get("/auth/check", { withCredentials: true });
        console.log(res);
        if(res.status==200){
          console.log("You're logged in")
          setIsLoggedIn(true);
        }
        else{
          console.log("You're not logged in")
          setIsLoggedIn(false)
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  },[]);

  return { isLoggedIn,setIsLoggedIn };
};

export default useAuthCheck;
