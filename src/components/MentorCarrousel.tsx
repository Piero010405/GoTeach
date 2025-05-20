/* eslint-disable @next/next/no-img-element */
"use client";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

function Estrellas({ count }: { count: number }) {
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
export default function MentorCarousel() {
  return (
    <div className="relative">
      {/* Gradiente izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Gradiente derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Marquee pauseOnHover speed={40} gradient={false} className="py-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <MentorCard key={i} />
        ))}
      </Marquee>
    </div>
  );
}

function MentorCard() {
  return (
    <div className="bg-white w-64 h-auto rounded-xl shadow-lg flex flex-col justify-between text-left p-4 mx-4 transition-transform duration-300 hover:scale-110 cursor-pointer select-none">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="/img/mentor1.jpg"
          alt="Mentor"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-sm text-gray-800">Ekaterina Lazo</p>
          <p className="text-gray-500 text-xs">Matemáticas</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-3 relative mb-3">
        Experta en cálculo diferencial, lógica matemática y tutorías personalizadas. +5 años de experiencia.
      </p>

      <div className="flex justify-between items-center">
        <div className="text-yellow-500 text-sm flex items-center justify-center gap-2"><Estrellas count={4} /> 4.8</div>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
          Disponible
        </span>
      </div>
    </div>
  );
}
