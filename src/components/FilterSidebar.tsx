"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function FilterSidebar() {
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  return (
    <aside className="bg-white rounded-xl p-5 space-y-6 text-gray-500 border-gray-300 border-2">
      <div>
        <h3 className="font-semibold mb-2">Categoría</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> Matemáticas</li>
          <li><input type="checkbox" /> Historia</li>
          <li><input type="checkbox" /> Física</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Precio</h3>
        <input type="range" min="15" max="50" />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Calificación</h3>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const value = i+1; // mostrar de 5 a 1
            return (
              <button
                key={value}
                onClick={() => setRatingFilter(value)}
                className="cursor-pointer"
              >
                <Star
                  size={20}
                  fill={ratingFilter !== null && value <= ratingFilter ? "#facc15" : "none"}
                  stroke="#facc15"
                />
              </button>
            );
          })}
        </div>
        {ratingFilter && (
          <div className="text-sm mt-1 text-gray-400">
            Mostrando mentores con {ratingFilter} estrellas o más
          </div>
        )}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Disponibilidad</h3>
        <ul className="text-sm">
          <li><input type="checkbox" /> Hoy</li>
          <li><input type="checkbox" /> Esta semana</li>
          <li><input type="checkbox" /> Este mes</li>
        </ul>
      </div>
    </aside>
  );
}
