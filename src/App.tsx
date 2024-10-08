import CardProyectList from "./components/CardProyect";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import Swal from "sweetalert2";
import { db } from "./data/db";

function App() {
  const email: string = "rubioporrasangela@gmail.com";

  const copiarEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    Swal.fire({
      position: "top",
      background: "#EA580C",
      color: "#fff",
      title: "Copiado con exito",
      showConfirmButton: false,
      timer: 800,
    });
  };

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
            <a
              href="https://github.com/AnrubioG"
              target="_blank"
              className="text-6xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anrubiodev/"
              target="_blank"
              className="text-6xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-xl md:text-2xl px-3 md:px-6 py-3 border-2 border-white rounded-md">
              rubioporrasangela@gmail.com
            </p>
            <button
              className="text-2xl px-2 py-3 border-2 border-white rounded-md"
              onClick={() => copiarEmail(email)}
            >
              <FaCopy className="text-4xl" />
            </button>
          </div>
        </ul>
      </section>

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            . Creado por Angela Rubio.
          </span>
          <ul className="grid grid-cols-2 md:grid-rows-1 md:grid-cols-2  items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-y-3 gap-x-6">
            <a
              href="#hero"
              className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
            >
              Home
            </a>
            <a
              href="#proyectos"
              className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
            >
              Proyectos
            </a>
            <a
              href="#experiencia"
              className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              className="text-xl font-semibold leading-6 text-white hover:text-amber-400"
            >
              Contacto
            </a>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
