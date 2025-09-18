export const getToken = () =>
  typeof window !== "undefined" && localStorage.getItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
export const getUserData = () => {
  const data = typeof window !== "undefined" && localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

export const setUserData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
export const removeToken = () => localStorage.removeItem("token");
export const isAuthenticated = () => !!getToken();
