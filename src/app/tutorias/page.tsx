/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";

const tabs = ["Próximas tutorías", "Tutorías pasadas", "Grabaciones"];

const tutorias = [
  {
    nombre: "Ekaterina Lazo",
    materia: "Matemáticas",
    fecha: "16 de abr. 15:00",
    duracion: "2 horas",
    img: "/img/mentor1.jpg"
  },
  {
    nombre: "mentor2",
    materia: "Matemáticas",
    fecha: "16 de abr. 15:00",
    duracion: "2 horas",
    img: "/img/mentor1.jpg"
  },
  {
    nombre: "mentor3",
    materia: "Matemáticas",
    fecha: "16 de abr. 15:00",
    duracion: "2 horas",
    img: "/img/mentor1.jpg"
  },
  {
    nombre: "mentor4",
    materia: "Matemáticas",
    fecha: "16 de abr. 15:00",
    duracion: "2 horas",
    img: "/img/mentor1.jpg"
  },
  // ... puedes repetir o mapear desde backend
];

export default function MisTutoriasPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
      </div>
      <div className="bg-[#F5FAFF] min-h-screen text-gray-700 px-10 py-10">
        {/* Tabs */}
        <div className="flex gap-10 border-b mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-2 font-semibold transition cursor-pointer ${
                activeTab === index
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Lista de tutorías */}
        <div className="space-y-4">
          {tutorias.map((tutoria, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 flex justify-between items-center shadow border border-gray-200"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={tutoria.img}
                  alt="mentor"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm">{tutoria.nombre}</p>
                  <p className="text-sm text-gray-500">
                    {tutoria.materia} – {tutoria.fecha} – {tutoria.duracion}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
                  Unirse a la llamada
                </button>
                <button className="border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-50">
                  Chatear
                </button>
              </div>
            </div>
          ))}
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
