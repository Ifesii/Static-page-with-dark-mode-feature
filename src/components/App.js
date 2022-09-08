import React from "react";
import Navbar from './Navbar';
import MainContent from './MainContent';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
   <div className="container">
    <Navbar 
    darkMode={darkMode} 
    toggleDarkMode={toggleDarkMode}
      
    />
    <MainContent darkMode={darkMode}/>
  </div>
  )
}


export default App;
