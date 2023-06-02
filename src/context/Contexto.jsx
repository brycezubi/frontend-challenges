import { createContext, useState } from "react"
import { proyectos as data} from '../data/datos'

export const Contexto =  createContext();

// eslint-disable-next-line react/prop-types
const ContextoProvider = ({children})=>{

  const [proyectos] = useState(data)
  const [filtro, setFiltro] = useState('');

  const handleFiltro = (valor)=>{
    setFiltro(valor)
  }

  return (
    <Contexto.Provider
      value={{
        proyectos,
        filtro,
        handleFiltro
      }}
    >
      {children}
    </Contexto.Provider>
  )
}


export default ContextoProvider;