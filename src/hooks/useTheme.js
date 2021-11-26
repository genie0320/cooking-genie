import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {

    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('Please add this component to Theme provider first.')
    }

    return context
}