
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext/ThemeContext";

import './styles/index.css'

function App() {

    const {theme, setTheme} = useContext(ThemeContext);

	return (
        <div className={`App ${theme}`}>
            <div className="container">
                <Navbar/>
                <AppRouter/>
            </div>
        </div>
	);
}

export default App;
