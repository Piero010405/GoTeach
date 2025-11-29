/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSidebar from "@/components/FilterSidebar";
import MentorList from "@/components/MentorList";
import Navbar from "@/components/navbar";

export default function BuscarPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") ?? "";

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    // Si cambia la URL (por ejemplo, vuelves atrás), sincroniza el input
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/buscar?query=${encodeURIComponent(q)}`);
  };

  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
        <div className="max-w-3/4 mx-auto px-4 py-5 text-center">
          {/* Buscador en página de resultados */}
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-3/4 mx-auto rounded-md flex items-center gap-2 shadow-lg px-3"
          >
            <input
              type="text"
              placeholder="Buscar Asesores"
              className="w-full px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-6">
        {/* Filtros */}
        <div className="w-64">
          <FilterSidebar />
        </div>

        {/* Resultados */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">
            12 mentores encontrados{" "}
            {initialQuery && (
              <span className="text-gray-500">
                para <span className="font-semibold">"{initialQuery}"</span>
              </span>
            )}
          </h2>

          {/* Aquí todavía usas MentorList estático.
              Más adelante podemos filtrar de verdad según `initialQuery`. */}
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
              <li>
                <a className="hover:underline">Inicio</a>
              </li>
              <li>
                <a className="hover:underline">Buscar mentores</a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Sé un mentor
                </a>
              </li>
              <li>
                <a className="hover:underline">Ayuda & Soporte</a>
              </li>
            </ul>
          </div>

          {/* Información legal */}
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a className="hover:underline">Términos de uso</a>
              </li>
              <li>
                <a className="hover:underline">Política de privacidad</a>
              </li>
              <li>
                <a className="hover:underline">Contacto</a>
              </li>
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
