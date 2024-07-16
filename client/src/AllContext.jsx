/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from "react";

export const AllContext = createContext(null);

export default function AllContextProvider({ children }) {
  const [user, setUser] = useState("hello");

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <AllContext.Provider value={contextValue}>{children}</AllContext.Provider>
  );
}
