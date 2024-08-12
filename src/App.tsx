import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="max-w-full mx-8 md:mx-28 lg:mx-44 my-20 lg:my-40  flex flex-col items-center md:items-start text-center md:text-left">
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

      <section className="max-w-full mx-8 my-20 md:mx-28 lg:mx-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"></section>
    </>
  );
}

export default App;
