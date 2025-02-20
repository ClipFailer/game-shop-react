import {useEffect, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'light';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={
            {theme, setTheme}
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;