import React, {useContext} from 'react';

import '../../styles/index.scss';
import Navbar from "../Navbar/Navbar";
import Router from "../Router/Router";
import {useTheme} from "../../contexts/ThemeContext/useTheme";
import {routes} from "../../routes";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar/>

            <Router routes={routes}/>
        </div>
    );
};

export default App;