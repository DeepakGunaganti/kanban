import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colourtheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const root = window.document.documentElement;
         root.classList.remove(colourtheme)
          root.classList.add(theme)
          localStorage.setItem('theme', theme)
    },[theme, colourtheme])
  return [colourtheme, setTheme]
}

export default useDarkMode
