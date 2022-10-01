import { createContext, useContext, useState } from 'react'

const styleContext = createContext()
const styleToggleContext = createContext()

export const useStyleContext = () => {
  return useContext(styleContext)
}
export const useStyleToggleContext = () => {
  return useContext(styleToggleContext)
}

export const StyleProvider = ({children}) => {
  const [style, setStyle] = useState({opacity: 1})

  return (
    <styleContext value={style}>
      <styleToggleContext value={setStyle}>
        {children}
      </styleToggleContext>
    </styleContext>
  )
}