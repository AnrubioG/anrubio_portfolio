export default function Experience() {
  return (
    <>
      <h2 className="text-amber-400 font-black  my-20 text-xl md:text-4xl">
        MI EXPERIENCIA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full h-auto rounded-2xl overflow-hidden">
          <img src="/img/usuarios.jpg" alt="" className="h-full object-cover" />
        </div>
        <div>
          <h3 className="text-amber-400 my-5 text-center text-xl md:text-2xl">
            UN ENFOQUE EN EL CLIENTE:
          </h3>
          <p className="text-2xl text-left md:text-2xl max-w-6xl text-white mt-4 md:mt-8">
            Cuento con más de 5 años de experiencia en atención al cliente en
            diversos sectores, donde he desarrollado habilidades clave como el
            trabajo en equipo, la comunicación asertiva y una meticulosa
            orientación al detalle. Mi fortaleza principal es la empatía, lo que
            me permite comprender profundamente las necesidades de los usuarios
            y generar soluciones efectivas que no solo satisfacen sus
            expectativas, sino que también fortalecen su conexión con la
            empresa.
          </p>

          <div>
            <p className="text-2xl text-center md:text-left md:text-2xl max-w-6xl text-white mt-4 md:mt-8">
              Te invito a conocer más sobre mi experiencia y habilidades:
            </p>
            <a
              href="https://drive.google.com/file/d/1o7QwY9WbU5zAeqr-8JD8HxXpLkdUV1nz/view?usp=sharing"
              target="_blank"
            >
              <button className="px-4 py-3 my-5 text-slate-900 font-semibold bg-amber-400 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                DESCARGAR CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
