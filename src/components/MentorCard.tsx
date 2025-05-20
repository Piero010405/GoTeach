/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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

type MentorProps = {
  id:string;
  nombre: string;
  materia: string;
  precio: string;
  rating: number;
  descripcion: string;
  disponibilidad: string;
};

export default function MentorCard(props: MentorProps) {
  return (
    <Link href={`/mentor/${props.id}`}>
      <div className="bg-white rounded-xl border-gray-300 border-2 p-5 mb-6 flex gap-6 items-center 
  transition-transform transform hover:scale-[1.02] hover:shadow-lg duration-300 ease-in-out cursor-pointer">
        <img src="/img/mentor1.jpg" alt="mentor" className="w-30 h-30 rounded-md" />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-800 font-bold">{props.nombre}</h3>
              <p className="text-gray-600">{props.materia}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">{props.precio}</p>
              <p className="text-green-600 text-sm">{props.disponibilidad}</p>
            </div>
          </div>
          <div className="text-[#facc15] mt-2 flex items-center justify-start gap-2"><Estrellas count={props.rating} /> {props.rating}</div>
          <p className="text-sm text-gray-700 mt-2">{props.descripcion}</p>
          <p className="text-sm text-blue-600 mt-2 underline">
            Ha trabajado en 3 similitudes a tu búsqueda
          </p>
        </div>
      </div>
    </Link>
  );
}
