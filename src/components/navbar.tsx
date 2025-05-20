"use client";
/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import Link from "next/link";
import AvatarDropdown from "./AvatarDropdown";
import { Bell, MessageSquare, Heart } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <nav className="bg-transparent text-white px-52 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 font-bold text-3xl">
          <img src="/img/logo.png" alt="Logo" className="w-12 h-12" />
          GoTeach
        </div>
      </Link>

      {/* Navegación central */}
      <ul className="flex gap-12">
        <li className="font-semibold transition-transform duration-200 hover:scale-105 hover:underline underline-offset-4">
          <Link href="/">Inicio</Link>
        </li>

        {/* Navegación según rol */}
        {session ? (
          role === "mentor" ? (
            <>
              <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
                <Link href="/mentor/sesiones">Sesiones</Link>
              </li>
              <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
                <Link href="/mentor/disponibilidad">Disponibilidad</Link>
              </li>
              <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
                <Link href="/mentor/ganancias">Ganancias</Link>
              </li>
            </>
          ) : (
            <>
              <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
                <Link href="/buscar">Buscar un mentor</Link>
              </li>
              <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
                <Link href="/tutorias">Mis tutorias</Link>
              </li>
            </>
          )
        ) : (
          <>
            <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
              <Link href="/buscar">Buscar un mentor</Link>
            </li>
            <li className="font-semibold hover:scale-105 hover:underline underline-offset-4 transition-transform">
              <Link href="/mentor">Sé un mentor</Link>
            </li>
          </>
        )}
      </ul>

      {/* Iconos y avatar */}
      <div className="flex items-center justify-center gap-4">
        {session ? (
          role === "mentor" ? (
            <>
              <MessageSquare strokeWidth={2} className="text-white transition-transform duration-100 hover:scale-115 cursor-pointer" />
              <Bell strokeWidth={2} className="text-white transition-transform duration-100 hover:scale-115 cursor-pointer" />
              <AvatarDropdown />
            </>
          ) : (
            <>
              <MessageSquare strokeWidth={2} className="text-white transition-transform duration-100 hover:scale-115 cursor-pointer" />
              <Bell strokeWidth={2} className="text-white transition-transform duration-100 hover:scale-115 cursor-pointer" />
              <Heart strokeWidth={2} className="text-white transition-transform duration-100 hover:scale-115 cursor-pointer" />
              <AvatarDropdown />
            </>
          )) : (
          <AvatarDropdown />
        )}
      </div>
    </nav>
  );
}
