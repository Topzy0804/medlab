import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../lib/appwrite";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLoggedInUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  
  const logout = async () => {
    await account.deleteSessions("current");
    setUser(null);
  };

  const isAdmin = user && user.email === "azeezullahtolulope1004@gmail.com";
  
  return (
    <UserContext.Provider value={{ user, loading, setUser, getLoggedInUser, logout, isAdmin }}>
      {!loading && children}
    </UserContext.Provider>
  );
};