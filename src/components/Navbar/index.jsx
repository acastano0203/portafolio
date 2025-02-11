import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Asegúrate de tener tu logo en esta ruta
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full justify-center items-center flex">
      <nav className="relative grid w-full grid-cols-3 justify-between items-center md:grid-cols-3">
        {/* Logo a la izquierda */}
        <div className="w-full  pt-2">
          <img src={logo} alt="Logo" className="w-48" />
        </div>

        {/* Botón del menú hamburguesa - visible solo en móvil */}
        <button
          className="md:hidden absolute right-4 top-4 z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="w-6 h-6 text-black" />
          ) : (
            <HiMenu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Menú */}
        <ul
          className={`
          flex font-poppins text-[100%] gap-8 text-black
          md:flex md:gap-x-10 md:mr-10
          ${isOpen ? "flex" : "hidden"}
          md:relative absolute top-0 right-0
          md:flex-row flex-col
          md:bg-transparent
          md:p-0 p-8 pt-5
          md:w-auto w-64
          md:h-auto
          z-10
          rounded-l-2xl
          bg-purple-300
          bg-opacity-90
        
        
        `}
        >
          <li
            onClick={() => {
              scrollToSection("home");
              setIsOpen(false);
            }}
            className="hover:text-[#5e17eb] cursor-pointer transition-colors duration-300 "
          >
            <span className="text-[100%] underline">Home</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="hover:text-[#5e17eb] cursor-pointer transition-colors duration-300 "
          >
            <span className="text-[100%] underline">Acerca</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("experience");
              setIsOpen(false);
            }}
            className="hover:text-[#5e17eb] cursor-pointer transition-colors duration-300 "
          >
            <span className="text-[100%] underline">Experiencia</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
              setIsOpen(false);
            }}
            className="hover:text-[#5e17eb] cursor-pointer transition-colors duration-300 "
          >
            <span className="text-[100%] underline">Proyectos</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
