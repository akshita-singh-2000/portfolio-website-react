import React, { createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// get the local theme and if not found then set it to light
export const ThemeProivider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        //console.log("Theme Switched");
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};