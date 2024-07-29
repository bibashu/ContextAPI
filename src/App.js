// App.js
import React from 'react';
import './App.css';
import { ThemeProvider, useThemeContext } from './provider/ThemeContext';
import { Header } from './component/Header';
import ThemeChanger from './component/ThemeChanger';

const MainContent = () => {
  const { couleurPrincipale, police } = useThemeContext();

  return (
    <div className="App">
    
       <Header />
        <ThemeChanger />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
