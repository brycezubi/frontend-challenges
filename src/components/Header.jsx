
import Filters from "./Filters";
import Tec from "./Tec";

const Header = () => {
  return (
    <header className="contenedor">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl text-slate-800 font-bold">
            Frontend Mentor Challenges
          </h1>
          <h2 className="text-slate-600">Desafios de Diseño Web Frontend.</h2>
        </div>
        <p className="font-medium">
          Realizados utilizando las siguientes tecnologias
        </p>
      </div>
      <Tec />

      <Filters />
    </header>
  );
};

export default Header;
