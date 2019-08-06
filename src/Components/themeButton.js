import React from 'react'
import {useTheme} from '../Theme/themeProvider'



const ThemeButton = () => {
    
    const themeState = useTheme();

    return (
        <button onClick={()=>themeState.toggle()}>{themeState.dark ? 'Light Mode': 'Dark Mode'}</button>
    )
}

export default ThemeButton
