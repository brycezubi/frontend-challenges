import { useContext } from "react"
import { Contexto } from "../context/contexto"


const Filters = () => {

  const { filtro , handleFiltro} = useContext(Contexto)

  return (
    <form className="flex flex-col gap-4 md:items-center md:justify-between md:flex-row">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Proyectos</h2>

        <div className="flex flex-col gap-1">
        <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="level"
          >
            Niveles
          </label>
          <select
            name="level"
            id="level"
            value={filtro}
            onChange={(e)=>handleFiltro(e.target.value)}
            className="py-2 md:px-4  rounded-md text-center text-slate-800 border"
          >
            <option value="">Selecciona Nivel</option>
            <option value="newbie">Novato</option>
            <option value="junior">Junior</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
            <option value="premium">Premium</option>
          </select>

        </div>
      </form>
  )
}

export default Filters