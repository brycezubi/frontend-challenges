/* eslint-disable react/prop-types */

const Card = ({ name, img, level, code, live }) => {
  return (
    <article className="rounded-md overflow-hidden flex flex-col gap-5 bg-white shadow pb-5 max-w-md">
      <img src={img} alt={`bg-${name}`} />
      <div className="px-8">
        <div className="flex justify-end">
          <small
            className={`py-[1px] px-2 capitalize rounded-lg text-white font-medium ${
              level === "premium" && "bg-amber-500"
            } ${level === "avanzado" && "bg-red-500"} ${
              level === "intermedio" && "bg-orange-500"
            } ${level === "junior" && "bg-blue-400"}
            ${level === 'newbie' && "bg-cyan-400"}`
          }
            
          >
            {level}
          </small>
        </div>
        <h2 className="text-center font-medium text-slate-800 my-2">{name}</h2>
        <div className="flex justify-around mt-4">
          <a href={live} target="_blank" className="btn-link" rel="noreferrer">
            Ver Proyecto
          </a>
          <a href={code} target="_blank" className="btn-link" rel="noreferrer">
            Codigo de Proyecto
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
