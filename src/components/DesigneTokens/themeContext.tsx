import React, { createContext, useState, useContext, ReactNode } from 'react'
import { lightTheme, darkTheme } from './pallets'
import { useColorScheme } from 'react-native'

type ThemeContextType = {
    theme: typeof lightTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => { }
})


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemColor = useColorScheme();
    const [isDark, setIsDark] = useState(systemColor === 'dark');
    React.useEffect(() => {
        setIsDark(systemColor === 'dark')
    }, [systemColor])
    
    const toggleTheme = () => setIsDark(prev => !prev)
    
    console.log(isDark)
    return (
        <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
