/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/navbar";
import ScheduleGrid from "@/components/ScheduleGrid";

export default function AgendarPage() {
  return (
    <div className="bg-[#F5FAFF] h-full min-h-screen text-gray-500">
      <div className="h-fit bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-2xl font-bold mb-6">Agendar tutoría</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Horario semanal */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
            <ScheduleGrid />

            <div className="mt-6">
              <label htmlFor="participantes" className="block font-medium mb-1">
                Participantes (1-5):
              </label>
              <select
                id="participantes"
                className="w-28 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resumen + descuentos */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-blue-100 rounded-xl p-4 text-sm">
              <h3 className="text-lg font-semibold mb-2">Descuentos</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="text-right">Participantes</th>
                    <th className="text-right">Descuento</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 10, 20, 30, 40].map((d, i) => (
                    <tr key={i}>
                      <td className="text-right">{i + 1} {i === 0 && "(individual)"}</td>
                      <td className="text-right">{d}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Resumen de reserva</h3>
              <div className="flex items-center gap-3 mb-2">
                <img src="/img/mentor1.jpg" alt="mentor" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium">Ekaterina Lazo</p>
                  <p className="text-sm text-gray-500">Matemáticas</p>
                </div>
              </div>
              <p className="text-xs mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                  Estado: Confirmado
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                8 de octubre de 2025 a las 15:00 &bull; 1 hora
              </p>
              <div className="text-sm">
                <p className="flex justify-between">
                  <span>Precio por persona</span>
                  <span>$30.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Descuento</span>
                  <span>-$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$30.00</span>
                </p>
                <hr className="my-2" />
                <p className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$30.00</span>
                </p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
              Confirmar y agendar
            </button>
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
