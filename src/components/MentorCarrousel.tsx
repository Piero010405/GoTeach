/* eslint-disable @next/next/no-img-element */
"use client";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

function Estrellas({ count }) {
  return (
    <div className="flex gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          fill={i < count ? "#facc15" : "none"}
          stroke="#facc15"
        />
      ))}
    </div>
  );
}

// 👉 Mentores principales
const mentors = [
  {
    id: 1,
    name: "Albert Einstein",
    specialty: "Física Teórica",
    description:
      "Experto en relatividad, mecánica cuántica y cosmología. Mentor ideal para estudiantes avanzados de física y matemáticas.",
    rating: 4.9,
    status: "Disponible",
    image: "/img/mentor1.jpg", // Einstein
  },
  {
    id: 2,
    name: "Marie Curie",
    specialty: "Química • Física Nuclear",
    description:
      "Pionera en el estudio de la radiactividad, doble ganadora del Premio Nobel. Ideal para clases de química general, química moderna y física nuclear.",
    rating: 5.0,
    status: "Disponible",
    image: "/img/mentor2.jpg", // Curie
  },
  {
    id: 3,
    name: "J. Robert Oppenheimer",
    specialty: "Física Cuántica",
    description:
      "Especialista en física cuántica, mecánica de partículas y física atómica. Perfecto para estudiantes universitarios de ciencias.",
    rating: 4.7,
    status: "No disponible",
    image: "/img/mentor3.jpg", // Oppenheimer
  },
  {
    id: 4,
    name: "Isaac Newton",
    specialty: "Matemáticas • Mecánica",
    description:
      "Padre del cálculo, las leyes del movimiento y la gravitación universal. Mentor ideal para matemáticas avanzadas, física clásica y cálculo.",
    rating: 5.0,
    status: "Disponible",
    image: "/img/mentor4.jpg", // Newton
  },
  {
  "id": 5,
  "name": "Abimael Guzman",
  "specialty": "Historia del Perú",
  "description": "Historiador peruano especializado en la República, forma parte de la historia del Perú. Quien mejor para enseñar quien lo creo.",
  "rating": 4.9,
  "status": "Disponible",
  "image": "/img/mentor5.jpg"
  },
  
  {
  "id": 6,
  "name": "Alan García",
  "specialty": "Lenguaje y Oratoria",
  "description": "Reconocido por su sólida capacidad oratoria y técnicas de comunicación política. Ideal para estudiantes de expresión oral y análisis del discurso.",
  "rating": 4.6,
  "status": "Disponible",
  "image": "/img/mentor6.jpg"
  }

];

export default function MentorCarousel() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Marquee pauseOnHover speed={40} gradient={false} className="py-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </Marquee>
    </div>
  );
}

function MentorCard({ mentor }) {
  return (
    <div className="bg-white w-64 rounded-xl shadow-lg flex flex-col justify-between p-4 mx-4 hover:scale-110 transition-transform cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-sm text-gray-800">{mentor.name}</p>
          <p className="text-gray-500 text-xs">{mentor.specialty}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
        {mentor.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          <Estrellas count={Math.round(mentor.rating)} />
          {mentor.rating}
        </div>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
          {mentor.status}
        </span>
      </div>
    </div>
  );
}
