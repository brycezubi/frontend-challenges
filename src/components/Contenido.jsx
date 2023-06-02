/* eslint-disable react/prop-types */

import { useContext } from "react";
import Card from "./Card";
import { Contexto } from "../context/contexto";

const Contenido = () => {

  const {proyectos , filtro} =useContext(Contexto)

  const proyectosFiltrados = proyectos.filter( p=> filtro === '' ? proyectos : p.level === filtro)

  return (
    <main className="contenedor grilla">
      {proyectosFiltrados?.map((d) => (
        <Card key={d.id} {...d} />
      ))}
    </main>
  );
};

export default Contenido;
