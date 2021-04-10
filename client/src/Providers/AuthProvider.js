import api from "../Utils/Api";
// called when the user attempts to log in
const login = async (credentials) => {
  const { data, error } = await api.post("/users/login", credentials);
  localStorage.setItem("email", credentials.email);
  localStorage.setItem("password", credentials.password);
  return { data, error };
};

const logout = async () => {
  return localStorage.removeItem("email");
};

// called when the API returns an error
const checkError = ({ status }) => {
  if (status === 401 || status === 403) {
    localStorage.removeItem("email");
    return Promise.reject();
  }
  return Promise.resolve();
};

// called when the user navigates to a new location, to check for authentication
const checkAuth = () => {
  return localStorage.getItem("email") ? true : false;
};

// called when the user navigates to a new location, to check for permissions / roles
const getPermissions = () => Promise.resolve("guest");

const register = async (credentials) => {
  const { data, error } = await api.post("/users/signup", credentials);
  return {
    data,
    error,
  };
};
const authProvider = {
  login,
  logout,
  checkError,
  checkAuth,
  getPermissions,
  register,
};
export default authProvider;
