import { create } from "zustand";
import api from "../src/lib/axios";

const useAuthStore = create((set) => ({
  isLoggedIn: null, 

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/check", { withCredentials: true });
      set({ isLoggedIn: res.data.loggedIn }); 
    } catch(err) {
      console.error("checkAuth failed:", err.response?.data || err.message);
      set({ isLoggedIn: false });
    }
  },

  login: async (email, password) => {
    await api.post("/auth/login", { email, password }, { withCredentials: true });
    set({ isLoggedIn: true });
  },

  
}));

export default useAuthStore;
