/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import { useParams, useRouter } from "next/navigation";
import { Star, Heart } from "lucide-react";

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

export default function MentorProfilePage() {
  const { id } = useParams();
  const { data: session } = useSession();
  const router = useRouter();

  const handleAgendarClick = () => {
    if (session) {
      router.push(`/agendar/${mentor.id}`);
    } else {
      router.push("/login");
    }
  };
  const handleFavoritoClick = () => {
    if (session) {
      router.push(``);
    } else {
      router.push("/login");
    }
  };

  // Aquí puedes simular datos para ahora
  const mentor = {
    id,
    nombre: "Ekaterina Lazo",
    materia: "Matemáticas",
    rating: 4.8,
    reseñas: 23,
    disponibilidad: "Lunes a Viernes: 8pm - 10pm",
    precio: "$30.00 USD/h",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula eget sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula eget sapien facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula eget sapien facilisis.",
    disciplinas: ["Cálculo", "Álgebra", "Trigonometría"],
    experiencia: [
      "Ha trabajado como profesora universitaria por 5 años.",
      "Especialista en razonamiento lógico y matemática avanzada.",
      "Ha trabajado como profesora universitaria por 5 años.",
      "Especialista en razonamiento lógico y matemática avanzada.",
      "Ha trabajado como profesora universitaria por 5 años.",
      "Especialista en razonamiento lógico y matemática avanzada.",
    ],
    opiniones: [
      {
        titulo: "Excelente clase de cálculo",
        fecha: "15 de marzo",
        estrellas: 5,
        comentario:
          "Muy paciente y clara al explicar los temas complejos. ¡Altamente recomendada!",
      },
      {
        titulo: "Excelente clase de cálculo",
        fecha: "15 de marzo",
        estrellas: 4,
        comentario:
          "Muy paciente y clara al explicar los temas complejos. ¡Altamente recomendada!",
      },
      {
        titulo: "Excelente clase de cálculo",
        fecha: "15 de marzo",
        estrellas: 1,
        comentario:
          "Muy paciente y clara al explicar los temas complejos. ¡Altamente recomendada!",
      },
      {
        titulo: "Excelente clase de cálculo",
        fecha: "15 de marzo",
        estrellas: 2,
        comentario:
          "Muy paciente y clara al explicar los temas complejos. ¡Altamente recomendada!",
      },
      {
        titulo: "Excelente clase de cálculo",
        fecha: "15 de marzo",
        estrellas: 3,
        comentario:
          "Muy paciente y clara al explicar los temas complejos. ¡Altamente recomendada!",
      },
    ],
  };

  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-6">
        {/* Panel principal */}
        <div className="flex-1">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Header mentor */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  src="/img/mentor1.jpg"
                  alt={mentor.nombre}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{mentor.nombre}</h1>
                  <p className="text-gray-500">{mentor.materia}</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 underline hover:text-blue-800 cursor-pointer">Compartir</button>
            </div>

            {/* Bio */}
            <section className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Sobre el mentor</h2>
              <p className="text-gray-600 leading-relaxed">{mentor.bio}</p>
            </section>

            {/* Disciplinas */}
            <section className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Materias y niveles</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.disciplinas.map((d, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-gray-100 text-sm rounded-md border transition duration-200 hover:scale-105 cursor-pointer"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </section>

            {/* Experiencia */}
            <section className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Experiencia</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {mentor.experiencia.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Opiniones */}
            <section>
              <h2 className="font-semibold text-gray-700 mb-4">Opiniones</h2>
              <div className="space-y-4">
                {mentor.opiniones.map((op, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-4 bg-gray-50 text-sm text-gray-600"
                  >
                    <p className="font-semibold text-black">{op.titulo}</p>
                    <p className="text-yellow-500"><Estrellas count={op.estrellas} /></p>
                    <p className="italic text-xs text-gray-500">{op.fecha}</p>
                    <p className="mt-2">{op.comentario}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="bg-white rounded-xl p-6 shadow-sm sticky top-6">
            <div className="flex items-center gap-2 mb-2">
              <p className="flex items-center gap-2 text-yellow-500 text-lg font-bold"><Star size={18} fill={"#facc15"} stroke="#facc15"/>{mentor.rating}</p>
              <p className="text-gray-600 text-sm">({mentor.reseñas} reseñas)</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">{mentor.disponibilidad}</p>
            <p className="text-lg font-semibold mb-4">{mentor.precio}</p>
            <button
              onClick={handleAgendarClick}
              className="bg-blue-600 w-full py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition-all mb-3 cursor-pointer"
            >
              Agendar
            </button>
            <button 
              onClick={handleFavoritoClick}
              className="border w-full py-2 rounded-md text-sm text-gray-500 border-gray-400 hover:bg-gray-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart size={16} className="text-gray-500" />
              Guardar como favorito
            </button>
          </div>
        </aside>
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
