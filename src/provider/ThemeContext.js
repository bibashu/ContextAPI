// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  couleurPrincipale: 'Vert',
  police: 'Arial Black'
});

export const ThemeProvider = ({ children }) => {
  const [couleurPrincipale, setCouleurPrincipale] = useState('blue');
  const [police, setPolice] = useState('Arial');

  const contextValue = {
    couleurPrincipale,
    police,
    setCouleurPrincipale,
    setPolice
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
