/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";

type Mentor = {
  id: string;
  nombre: string;
  materia: string;
  categoria: string;
  descripcion: string;
  precio: string;
  rating: number;
  reviews: number;
  disponibilidad: string;
  imagen: string;
};

const MENTORES: Mentor[] = [
  {
    id: "einstein",
    nombre: "Albert Einstein",
    materia: "Física",
    categoria: "Física",
    descripcion:
      "Especialista en relatividad, física teórica y resolución de problemas avanzados.",
    precio: "$30/h",
    rating: 4.9,
    reviews: 120,
    disponibilidad: "Disponible hoy",
    imagen: "/img/mentor1.jpg",
  },
  {
    id: "curie",
    nombre: "Marie Curie",
    materia: "Química",
    categoria: "Química",
    descripcion:
      "Experta en química y física, ideal para temas de radiación, laboratorio y ciencia aplicada.",
    precio: "$28/h",
    rating: 4.8,
    reviews: 90,
    disponibilidad: "Disponible esta semana",
    imagen: "/img/mentor2.jpg",
  },
  {
    id: "oppenheimer",
    nombre: "J. Robert Oppenheimer",
    materia: "Física cuántica",
    categoria: "Física",
    descripcion:
      "Tutor para mecánica cuántica, teoría cuántica de campos y fundamentos de la física moderna.",
    precio: "$32/h",
    rating: 4.7,
    reviews: 75,
    disponibilidad: "Disponible este mes",
    imagen: "/img/mentor3.jpg",
  },
  {
    id: "newton",
    nombre: "Isaac Newton",
    materia: "Matemáticas",
    categoria: "Matemáticas",
    descripcion:
      "Fuerte en cálculo, álgebra y análisis; ideal para reforzar bases y cursos universitarios.",
    precio: "$27/h",
    rating: 4.9,
    reviews: 110,
    disponibilidad: "Disponible hoy",
    imagen: "/img/mentor4.jpg",
  },
  {
    id: "linguista",
    nombre: "Mario Vargas Llosa",
    materia: "Lingüística y Lenguas",
    categoria: "Lenguas",
    descripcion:
      "Apoyo en lingüística, gramática avanzada y estructuración de textos académicos.",
    precio: "$26/h",
    rating: 4.6,
    reviews: 60,
    disponibilidad: "Disponible esta semana",
    imagen: "/img/mentor7.jpg?v=2",
  },
  {
    id: "historia",
    nombre: "Alan García",
    materia: "Lenguaje y Oratoria",
    categoria: "Historia",
    descripcion:
      "Expero en oratoria e importante poder político en el Perú.",
    precio: "$25/h",
    rating: 4.7,
    reviews: 80,
    disponibilidad: "Disponible este mes",
    imagen: "/img/mentor6.jpg",
  },
  {
    id: "historia",
    nombre: "Abimael Guzman",
    materia: "Historia del Perú",
    categoria: "Historia",
    descripcion:
      "Ejemplo vivo de lo que se vivio en la epoca del terrorismo contra el poder político en el Perú.",
    precio: "$25/h",
    rating: 4.7,
    reviews: 80,
    disponibilidad: "Disponible este mes",
    imagen: "/img/mentor5.jpg",
  },
];

// Normaliza texto para ignorar acentos y mayúsculas
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function MentorList() {
  const searchParams = useSearchParams();
  const qRaw = searchParams.get("q") || "";
  const q = normalizar(qRaw.trim());

  const mentoresFiltrados = MENTORES.filter((m) => {
    if (!q) return true; // sin búsqueda → todos
    const nombre = normalizar(m.nombre);
    const materia = normalizar(m.materia);
    const categoria = normalizar(m.categoria);

    return (
      nombre.includes(q) ||
      materia.includes(q) ||
      categoria.includes(q)
    );
  });

  if (mentoresFiltrados.length === 0) {
    return (
      <p className="text-gray-500">
        No se encontraron mentores para "{qRaw}". Prueba con otra materia o
        nombre.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {mentoresFiltrados.map((m) => (
        <article
          key={m.id}
          className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-start border border-gray-100"
        >
          <img
            src={m.imagen}
            alt={m.nombre}
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="flex-1">
            <header className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {m.nombre}
                </h3>
                <p className="text-sm text-gray-500">{m.materia}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-gray-800">{m.precio}</p>
                <p className="text-green-600 text-xs">{m.disponibilidad}</p>
              </div>
            </header>

            <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
              {"★".repeat(Math.round(m.rating))}
              <span className="text-gray-700 ml-1">{m.rating.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">
                ({m.reviews} reseñas)
              </span>
            </div>

            <p className="text-sm text-gray-600">{m.descripcion}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
