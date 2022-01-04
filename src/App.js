import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main  darkMode={darkMode} />
        </div>
    );
};

export default App;
