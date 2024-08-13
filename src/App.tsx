import CardProyectList from "./components/CardProyect";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { db } from "./data/db";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <section
        id="hero"
        className="max-w-full mx-8 md:mx-28 lg:mx-44 my-20 lg:my-40  flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h4 className="text-amber-400 font-black text-xl md:text-2xl">
          HOLA, MI NOMBRE ES ANGELA
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold mt-4 md:mt-8">
          Front-End Developer
        </h1>
        <p className="text-2xl md:text-2xl max-w-6xl text-white mt-4 md:mt-8">
          Gracias a mis sólidos conocimientos en herramientas digitales y mi
          enfoque centrado en el cliente, desarrollo sitios web adaptados a tus
          necesidades y a las de tus usuarios.
        </p>
      </section>

      {/* Tecnologías */}
      <section
        id="proyectos"
        className="flex justify-center w-auto mx-8 md:mx-28 lg:mx-44 items-center md:items-start text-center md:text-left"
      >
        <div className="grid content-center grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="HTML Logo"
              src="/img/html.png"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="CSS Logo"
              src="/img/css.png"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="JavaScript Logo"
              src="/img/javascript.png"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="React Logo"
              src="/img/typescript.png"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="TypeScript Logo"
              src="/img/react.png"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center max-w-[100px] max-h-[100px]">
            <img
              alt="Tailwind Logo"
              src="/img/tailwind.png"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* proyectos */}
      <section
        id="proyectos"
        className="max-w-full mx-8 my-20 md:mx-28 lg:mx-44 items-center md:items-start text-center md:text-left"
      >
        <h2 className="text-amber-400 font-black  my-20 text-xl md:text-4xl">
          PROYECTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <CardProyectList proyectos={db} />
        </div>
      </section>

      {/* experiencia */}
      <section
        id="experiencia"
        className="max-w-full mx-8 my-20 md:mx-28 lg:mx-44 items-center md:items-start text-center md:text-left "
      >
        <Experience />
      </section>

      {/* Contacto */}

      <section
        id="contacto"
        className="max-w-full mx-8 my-20 md:mx-28 lg:mx-44 items-center md:items-start text-center md:text-left"
      >
        <h2 className="text-amber-400 font-black  my-20 text-xl md:text-4xl">
          CONTÁCTAME
        </h2>
        <ul className="mb-20 flex flex-col md:flex-row items-center justify-center gap-8 text-white font-bold">
          <div className="flex flex-row gap-8">
            <a href="" target="_blank" className="text-6xl">
              <FaGithub />
            </a>
            <a href="" target="_blank" className="text-6xl">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-row">
            <p className="text-2xl px-6 py-3 border-2 border-white rounded-md">
              rubioporrasangela@gmail.com
            </p>
            <div className="text-2xl px-2 py-3 border-2 border-white rounded-md">
              <FaCopy className="text-4xl" />
            </div>
          </div>
        </ul>
      </section>
    </>
  );
}

export default App;
