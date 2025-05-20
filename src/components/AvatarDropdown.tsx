/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AvatarDropdown() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const role = session?.user?.role;

  const toggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex place-items-center">
      {session ? (
        <div className="relative h-[36px]" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="transition-transform duration-200 hover:scale-115">
            <img
              src={session?.user?.image ?? "/img/mentor1.jpg"}
              alt="Avatar"
              className="w-9 h-9 rounded-full border-2"
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-md z-50 overflow-hidden text-sm text-blue-800 font-bold">
              {/* Opciones para mentor */}
              {role === "mentor" ? (
                <>
                  <Link href="/mentor/perfil">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mi perfil</div>
                  </Link>
                  <Link href="/ajustes">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ajustes de cuenta</div>
                  </Link>
                  <Link href="/soporte">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ayuda & Soporte</div>
                  </Link>
                </>
              ) : (
                // Opciones para alumno
                <>
                  <Link href="/ajustes">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ajustes de cuenta</div>
                  </Link>
                  <Link href="/recomendar">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Recomendar a un amigo</div>
                  </Link>
                  <Link href="/soporte">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ayuda & Soporte</div>
                  </Link>
                </>
              )}
              <hr className="border-t border-gray-200" />
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-800"
                onClick={() => signOut()}
              >
                Salir de la cuenta
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link href="/login">
          <button className="bg-white text-blue-600 font-semibold px-6 py-1.5 rounded-md transition duration-200 hover:scale-105 shadow-sm">
            Acceder
          </button>
        </Link>
      )}
    </div>
  );
}
