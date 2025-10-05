import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { lightTheme, darkTheme } from './pallets'
import AsyncStorage from '@react-native-async-storage/async-storage'

type ThemeContextType = {
    theme: typeof lightTheme;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    isDark: false,
    toggleTheme: () => { }
})


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            const currentTheme = await AsyncStorage.getItem('theme')
            currentTheme === 'dark' ? setIsDark(true) : setIsDark(false)
        };
        loadTheme()
    }, [])


    const toggleTheme = async () => {
        setIsDark(prev => {
            const newValue = !prev;
            AsyncStorage.setItem('theme', newValue ? 'dark' : 'light')
            return newValue
        })
    }

    return (
        <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
