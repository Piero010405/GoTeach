/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function ConfirmacionPage() {
  const router = useRouter();
  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
      </div>
      <div className="bg-[#F5FAFF] min-h-screen py-12 px-4 text-center text-gray-700">
        {/* Icono de éxito */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Título y mensaje */}
        <h1 className="text-3xl font-bold mb-2">¡Reserva confirmada!</h1>
        <p className="text-gray-600 mb-10">Gracias por tu pago. Tu sesión ha quedado agendada correctamente.</p>

        {/* Detalle del mentor */}
        <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow text-left mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <img src="/img/mentor1.jpg" alt="mentor" className="w-14 h-14 rounded-full" />
              <div>
                <p className="font-bold text-gray-800">Ekaterina Lazo</p>
                <p className="text-sm text-gray-500">Matemáticas</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Precio total:</p>
              <p className="font-bold text-xl text-gray-800">$30.00</p>
            </div>
          </div>
          <hr className="my-3" />
          <p className="text-sm mb-1 text-gray-600">16 abr 2024 · 15:00–16:00</p>
          <p className="text-sm text-gray-600">Individual</p>

          {/* Botones */}
          <div className="flex gap-4 mt-6">
            <button onClick={() => router.push("/tutorias")} className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 w-full cursor-pointer">
              Ver en Mis tutorías
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 w-full">
              Descargar factura
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 w-full">
              Contactar soporte
            </button>
          </div>
        </div>

        {/* Resumen de pago */}
        <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow text-left text-sm">
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>$30.00</p>
          </div>
          <div className="flex justify-between mb-2 font-semibold">
            <p>Total</p>
            <p>$30.00</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Método de pago</p>
            <p>Visa •••• 1234</p>
          </div>
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
