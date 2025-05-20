/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function PagoPage() {
  const [metodo, setMetodo] = useState("tarjeta");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [guardarMetodo, setGuardarMetodo] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Panel izquierdo */}
      <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-800 text-white flex flex-col justify-center items-center p-10">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-8 left-8 text-white hover:underline z-10 font-bold flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft /> Volver
        </button>

        <div className="bg-white text-gray-700 rounded-xl p-6 shadow-md w-full max-w-xs text-lg">
          <div className="flex items-center gap-4 mb-4">
            <img src="/img/mentor1.jpg" alt="mentor" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-bold">Ekaterina Lazo</h3>
              <p className="text-sm text-gray-500">Matemáticas</p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="text-lg">
            <div className="mb-2">
              <strong>Fecha y hora</strong>
              <p>25 de abril de 2024, 10:00 a.m.</p>
            </div>
            <div className="mb-2">
              <strong>Duración</strong>
              <p>2 horas</p>
            </div>
            <div>
              <strong>Precio por hora</strong>
              <p>$50.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm text-blue-100">
          <Lock size={16} />
          Tu información está cifrada y segura
        </div>
      </div>

      {/* Panel derecho */}
      <div className="w-1/2 p-10 flex flex-col justify-center text-gray-800">
        <h2 className="text-2xl font-bold mb-6">Pago</h2>

        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
            <input type="radio" name="metodo" value="tarjeta" checked={metodo === "tarjeta"} onChange={() => setMetodo("tarjeta")} />
            Tarjeta de Crédito/Débito
            <img src="/img/visa.png" alt="Visa" className="h-4 ml-auto" />
            <img src="/img/mastercard.png" alt="MasterCard" className="h-4" />
            <img src="/img/amex.png" alt="Amex" className="h-4" />
          </label>
          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
            <input type="radio" name="metodo" value="yape" checked={metodo === "yape"} onChange={() => setMetodo("yape")} />
            Yape/Plin
          </label>
          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
            <input type="radio" name="metodo" value="paypal" checked={metodo === "paypal"} onChange={() => setMetodo("paypal")} />
            PayPal
          </label>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Datos de tu tarjeta</h3>
          <input type="text" placeholder="F. vencimiento" className="w-full border p-2 rounded mb-2" />
          <div className="flex gap-2">
            <input type="text" placeholder="F. vencimiento" className="w-2/3 border p-2 rounded" />
            <input type="text" placeholder="CVV" className="w-1/3 border p-2 rounded" />
          </div>
        </div>

        <div className="text-right font-bold text-lg mb-4">Total <span className="text-gray-900">$100.00</span></div>

        <div className="mb-4 space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={aceptaTerminos} onChange={() => setAceptaTerminos(!aceptaTerminos)} />
            Acepto los <span className="text-blue-600 cursor-pointer">términos y condiciones</span> de GoTeach
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={guardarMetodo} onChange={() => setGuardarMetodo(!guardarMetodo)} />
            Guardar método de pago
          </label>
        </div>

        <button onClick={() => router.push("/confirmacion")} className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition cursor-pointer">
          Confirmar y Pagar
        </button>
      </div>
    </div>
  );
}
