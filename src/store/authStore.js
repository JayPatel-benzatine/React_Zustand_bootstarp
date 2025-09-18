import { create } from "zustand";
import {
  getToken,
  getUserData,
  removeToken,
  setToken,
  setUserData,
} from "../utils/auth";

const useAuthStore = create((set) => {
  const initialUser = getUserData();
  const initialToken = getToken();
  return {
    token: initialToken,
    user: initialUser,
    isLogin: !!(initialUser && initialToken),

    setIsLogin: (value) => set({ isLogin: value }),
    setUserData: (userData) => {
      setUserData(userData);
      set({
        user: userData,
        isLogin: !!(userData && getToken()),
      });
    },
    setToken: (token) => {
      setToken(token);
      set({
        token,
        isLogin: !!(getUserData() && token),
      });
    },
    logout: () => {
      removeToken();
      set({
        token: null,
        user: null,
        isLogin: false,
      });
    },
  };
});

export default useAuthStore;
