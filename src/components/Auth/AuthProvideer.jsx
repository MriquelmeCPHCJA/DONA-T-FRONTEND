import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticaded: false,
});
export function AuthProvideer({ children }) {
  const [isAuthenticaded, setIsAuthenticaded] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticaded }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
