import React, { createContext, useState, useContext, ReactNode } from 'react'
import { lightTheme, darkTheme } from './pallets'

type ThemeContextType = {
    theme: typeof lightTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => { }
})


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => setIsDark(!isDark)

    return (
        <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
