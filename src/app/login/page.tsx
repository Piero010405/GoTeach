/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.back();
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="flex h-screen bg-[#F5FAFF]">
      {/* Panel izquierdo */}
      <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-800 text-white relative p-10 flex flex-col justify-center items-center">
        {/* Botón Volver en la esquina superior izquierda */}
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-8 left-8 text-white hover:underline z-10 font-bold flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft /> Volver
        </button>

        <div className="flex flex-col items-center justify-center text-center w-full">
          <img src="/img/logo.png" alt="Logo" className="w-72 h-72 mb-6" />
          <h1 className="text-7xl font-extrabold mb-2">GoTeach</h1>
          <p className="text-xl mb-6">Encuentra tus mentorías ya!</p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100">
            Ver más
          </button>
        </div>
      </div>


      {/* Panel derecho - formulario */}
      <div className="w-1/2 flex items-center justify-center text-gray-600">
        <form onSubmit={handleSubmit} className="w-full max-w-2/3 px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded mb-4 bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-gray-700 mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded mb-4 bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">Recordarme</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Iniciar Sesión
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            ¿Aún no tienes una cuenta? <span className="text-blue-600 cursor-pointer">Crear Cuenta</span>
          </p>

          {/* Separador */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">O ingresa con</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Botones de login social simulados */}
          <div className="flex justify-between gap-4">
            <button className="flex-1 border px-4 py-2 rounded hover:bg-gray-100 bg-white">
              <img src="/img/canvas.png" alt="Canvas" className="h-5 mx-auto" />
            </button>
            <button className="flex-1 border px-4 py-2 rounded hover:bg-gray-100 bg-white">
              <img src="/img/google.png" alt="Google" className="h-5 mx-auto" />
            </button>
            <button className="flex-1 border px-4 py-2 rounded hover:bg-gray-100 bg-white">
              <img src="/img/windows.png" alt="Microsoft" className="h-5 mx-auto" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
