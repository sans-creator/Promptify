import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // By default, user is logged out

  const value = {
    user,
    setUser
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
