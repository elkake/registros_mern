import { useContext, createContext, useState } from 'react'

const MiContexto = createContext()

export const useGlobalContext = () => {
  const data = useContext(MiContexto)
  return data
}

export const GlobalContext = ({ children }) => {
  const [actualizar, setActualizar] = useState(false)

  return (
    <MiContexto.Provider value={{ actualizar, setActualizar }}>
      {children}
    </MiContexto.Provider>
  )
}
