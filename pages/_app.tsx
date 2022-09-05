import { createContext, useState } from 'react'
import '../styles/globals.css'

export const themeContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")

  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }

  return (
    <themeContext.Provider value={{theme, toogleTheme}}>
    <div id={theme}>
      <Component {...pageProps} />
    </div>
    </themeContext.Provider>
  ) 
}

export default MyApp
