import React, { useContext, createContext, useState, useEffect } from "react";

import { IAuthContext, User } from "../../types";

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [signned, setSignned] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setUser({
      email: "marcos@gmail.com",
      name: "Marcos",
      profile_image: "https://github.com/marcos-dev-web.png",
      token: "token",
    });
    setSignned(true);
    let time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
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
