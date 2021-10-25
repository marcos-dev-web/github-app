import React, { useContext, createContext, useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { getUser } from "../../services/getUser";

import { IAuthContext, User } from "../../types";

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [signned, setSignned] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getUser("marcos-dev-web");

      if (result.error) {
        ToastAndroid.show(result.error, ToastAndroid.SHORT);
      } else {
        setUser(result.data);
        setLoading(false);
        setSignned(true);
      }
    }

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signned,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
