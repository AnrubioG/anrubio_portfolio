import { Proyecto } from "../types";
import { FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";

type CardProyectListProps = {
  proyectos: Proyecto[];
};

export default function CardProyectList({ proyectos }: CardProyectListProps) {
  return (
    <>
      {proyectos.map((proyecto) => (
        <div
          key={proyecto.id}
          className="relative min-h-72 rounded-2xl overflow-hidden cursor-pointer "
        >
          <img
            src={`/img/${proyecto.image}.jpg`}
            alt={`imagen de ${proyecto.name}`}
            className="h-full w-full object-cover hover:opacity-70"
          />
          <h2 className="absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent text-4xl font-black text-white p-4">
            {proyecto.name}
          </h2>
          <a href={proyecto.link} target="_blank">
            <div className="absolute flex inset-0 justify-between items-end bg-black text-xl font-bold text-white p-4 opacity-0 transition-opacity duration-300 hover:opacity-70">
              <p>{proyecto.description}</p>
              <ul className="text-4xl font-black grid gap-5">
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaJsSquare />
                </li>
                <li>
                  <FaCss3Alt />
                </li>
              </ul>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
