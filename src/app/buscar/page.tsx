/* eslint-disable @next/next/no-img-element */
import FilterSidebar from "@/components/FilterSidebar";
import MentorList from "@/components/MentorList";
import Navbar from "@/components/navbar";

export default function BuscarPage() {
  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
        <div className="max-w-3/4 mx-auto px-4 py-5 text-center">
          <div className="bg-white max-w-3/4 mx-auto rounded-md">
            <input
              type="text"
              placeholder="Buscar Asesores"
              className="w-full px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-6">
        {/* Filtros */}
        <div className="w-64">
          <FilterSidebar />
        </div>

        {/* Resultados */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">12 mentores encontrados</h2>
          <MentorList />
        </div>
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
