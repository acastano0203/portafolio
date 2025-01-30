import React from "react";
import { FaReact, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAstro,
  SiOpenai,
  SiSass,
} from "react-icons/si";

const Project = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center lg:py-10"
      id="projects"
    >
      <h2 className="text-[200%] font-bold text-[#000080] mb-12">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto ">
        {/* Primera Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-xl transition-all duration-300 ease-in-out animate-pulse-subtle max-w-sm h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-[200%] font-bold text-[#000080] mb-4 underline">
              Tanner Banco
            </h3>
            <p className="text-[100%] text-gray-600 mb-4 pt-6">
              Sitio público banco Tanner Chile
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <SiAstro className="text-[100%] text-[#FF5D01]" />
              <FaReact className="text-[100%] text-[#61DAFB]" />
              <SiTailwindcss className="text-[100%] text-[#06B6D4]" />
              <FaDocker className="text-[100%] text-[#2496ED]" />
              <SiTypescript className="text-[100%] text-[#3178C6]" />
            </div>
            <a
              href="https://probt.tanner.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9aca3c] text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Demo
            </a>
          </div>
        </div>

        {/* Segunda Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-xl transition-all duration-300 ease-in-out animate-pulse-subtle max-w-sm h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-[200%] font-bold text-[#000080] mb-4 underline">
              Taza Maestra
            </h3>
            <p className="text-[100%] text-gray-600 mb-4 pt-6">
              Taza Maestra es una plataforma que vende café de especialidad con
              el valor agregado de enseñar cultura cafetera.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <FaReact className="text-[100%] text-[#61DAFB]" />
              <SiTailwindcss className="text-[100%] text-[#06B6D4]" />
              <SiTypescript className="text-[100%] text-[#3178C6]" />
              <SiOpenai className="text-[100%] text-[#412991]" />
            </div>
            <a
              href="https://www.tazamaestra.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9aca3c] text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Demo
            </a>
          </div>
        </div>

        {/* Tercera Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-xl transition-all duration-300 ease-in-out animate-pulse-subtle max-w-sm h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-[200%] font-bold text-[#000080] mb-4 underline">
              Aplicación de recetas
            </h3>
            <p className="text-[100%] text-gray-600 mb-4 pt-6">
              Una app que te inspira a cocinar con recetas fáciles y deliciosas,
              organizadas por categorías y con instrucciones paso a paso.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <FaReact className="text-[100%] text-[#61DAFB]" />
              <SiSass className="text-[100%] text-[#CC6699]" />
              <SiTypescript className="text-[100%] text-[#3178C6]" />
            </div>
            <a
              href="https://prueba-tecnica-frontend2025.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9aca3c] text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
