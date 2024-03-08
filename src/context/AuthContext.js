import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    role: null,
  });

  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const isAuth = async () => {
      try {
        //const res = await axios.get("http://localhost:5000/api/logged-user/", {
        //  withCredentials: true,
        //});
        //setUser(res.data);
      } catch (error) {
        setUser(null);
      }
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
