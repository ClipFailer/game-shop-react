import {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const memorizedTheme = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);


    return (
        <ThemeContext.Provider value={memorizedTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;