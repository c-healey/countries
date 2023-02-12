import React, { useState } from "react";

export const ModeContext = React.createContext();

export const ModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ModeContext.Provider
      value={{
        darkMode: darkMode,
        setDarkMode: setDarkMode,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};
