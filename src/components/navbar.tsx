/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AvatarDropdown from "./AvatarDropdown";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-transparent text-white px-52 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-3xl">
        <img src="/img/logo.png" alt="Logo" className="w-12 h-12" />
        GoTeach
      </div>
      <ul className="flex gap-12">
        <li className="font-semibold transition-transform duration-200 hover:scale-105 hover:underline underline-offset-4">
          <Link href="/">Inicio</Link>
        </li>
        <li className="font-semibold transition-transform duration-200 hover:scale-105 hover:underline underline-offset-4">
          <Link href="/buscar">Buscar un mentor</Link>
        </li>
        {session ? (
          <>
            <li className="font-semibold transition-transform duration-200 hover:scale-105 hover:underline underline-offset-4">
              <Link href="/mis-tutorias">Mis tutorias</Link>
            </li>
          </>
        ) : (
          <li className="font-semibold transition-transform duration-200 hover:scale-105 hover:underline underline-offset-4">
            <Link href="/mentor">Sé un mentor</Link>
          </li>
        )}
      </ul>
      <div>
        <AvatarDropdown />
      </div>
    </nav>
  );
}
