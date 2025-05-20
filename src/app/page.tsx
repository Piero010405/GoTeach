/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/navbar";
import MentorCarousel from "../components/MentorCarrousel";

export default function Home() {
  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-18 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Encuentra al mentor <br /> académico Ideal
          </h1>
          <p className="text-lg sm:text-xl mb-10">
            Conéctate con tutores expertos para tutorías en una variedad de materias
          </p>

          <div className="bg-white max-w-md mx-auto rounded-md">
            <input
              type="text"
              placeholder="Buscar Asesores"
              className="w-full px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="pb-10">
        <section className="bg-[#F5FAFF] py-15">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Principales Mentores</h2>
          <div className="w-2/3 mx-auto">
            <MentorCarousel />
          </div>
        </section>
        <section className="max-w-5xl mx-auto pb-15 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Categorías Populares
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Matemáticas", "Física", "Historia", "Química", "Lenguas", "Biología"].map((categoria, idx) => (
              <button
                key={idx}
                className="bg-white text-gray-700 font-medium px-6 py-2 rounded-full border border-gray-300 shadow-sm hover:bg-blue-100 transition"
              >
                {categoria}
              </button>
            ))}
          </div>
        </section>
        <section className="bg-blue-100 rounded-xl max-w-6xl mx-auto px-16 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Texto */}
            <div className="text-center md:text-left md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Acerca de GoTeach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Plataforma que facilita la conexión con mentores académicos profesionales para ayudarte a alcanzar tus metas educativas. Encuentra, agenda y aprende con confianza.
              </p>
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all">
                ¿Cómo funciona GoTeach?
              </button>
            </div>

            {/* Imagen */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/img/representacion-mentor.png"
                alt="Mentor ilustrado"
                className="max-w-xs md:max-w-sm w-auto h-60"
              />
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-blue-900 text-white pt-10 pb-2 mt-10">
        <div className="flex flex-col sm:flex-row justify-between gap-10 max-w-3/4 mx-auto px-6">
          
          {/* Branding */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <img src="/img/logo.png" alt="Logo" className="w-8 h-8" />
              <h2 className="text-2xl font-bold">GoTeach</h2>
            </div>
            <p className="text-sm text-blue-200">
              Conecta con mentores académicos y alcanza tu máximo potencial educativo.
            </p>
          </div>

          {/* Navegación */}
          <div className="w-1/3">
            <h3 className="font-semibold text-lg mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a className="hover:underline">Inicio</a></li>
              <li><a className="hover:underline">Buscar mentores</a></li>
              <li><a href="/contacto" className="hover:underline">Sé un mentor</a></li>
              <li><a className="hover:underline">Ayuda & Soporte</a></li>
            </ul>
          </div>

          {/* Información legal */}
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a className="hover:underline">Términos de uso</a></li>
              <li><a className="hover:underline">Política de privacidad</a></li>
              <li><a className="hover:underline">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white text-center text-sm pt-2 text-blue-300">
          © 2025 GoTeach. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
} 
