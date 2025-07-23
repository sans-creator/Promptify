import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // By default, user is logged out
  const [showLogin,setShowLogin]= useState(false)
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
