import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const colorReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.color }
        default:
            return state
    }
}

export function ThemeProvider({ children }) {

    const [state, dispach] = useReducer(colorReducer, {
        color: 'blue'
    })

    const colorChange = (color) => {
        dispach({ type: 'CHANGE_COLOR', payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, colorChange }}>
            {children}
        </ThemeContext.Provider>
    )
}