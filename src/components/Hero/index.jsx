import React from "react";
import { FaLinkedin, FaCode, FaReact } from "react-icons/fa";
import { BiSolidRocket } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import perfil from "../../assets/foto5.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] gap-8 w-full min-h-[300px] md:min-h-[400px] lg:min-h-[700px] px-4 mt-10 ">
      {/* Primera fila: Texto e imagen */}
      <div className="flex flex-col justify-center items-end md:items-end lg:items-end md:mr-8 mt-10">
        <h1 className="text-[100%] md:text-[150%] lg:text-[300%] font-bold font-poppins text-[#000080] text-center">
          <div className="flex items-center justify-center gap-2 font-poppins">
            ¡Hola!{" "}
            <FaCode className="text-[100%] md:text-[150%] lg:text-[250%] text-[rgba(73,19,180,0.8)]" />
          </div>
          <span className="font-poppins">Soy </span>
          <span className="text-[rgba(73,19,180,1)] font-bold font-poppins">
            Yamid castaño
          </span>
          <div className="flex items-center justify-center gap-2 font-poppins">
            Frontend developer
          </div>
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={perfil}
          alt="perfil"
          className="w-64 md:w-80 lg:w-96 object-cover rounded-lg"
        />
      </div>

      {/* Segunda fila: Iconos sociales (span completo) */}
      <div className="flex justify-center items-center md:col-span-2 ">
        <div className="flex gap-4 items-center animate-bounce">
          <a
            href="https://www.linkedin.com/in/yamidcastao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl text-[#0077b5] hover:opacity-80 flex items-center gap-2 font-poppins"
          >
            <span className="flex gap-3 items-center">
              <FaReact className="text-[100%] md:text-[100%] lg:text-[100%] text-blue-500 animate-spin-slow" />
              <BsLightningChargeFill className="text-[100%] md:text-[100%] lg:text-[100%] text-yellow-500 animate-spin-slow" />
              <BiSolidRocket className="text-[100%] md:text-[100%] lg:text-[100%] text-purple-500 animate-spin-slow" />
            </span>
            <FaLinkedin className="text-[100%] md:text-[100%] lg:text-[100%]" />
            <span className="text-[50%] md:text-[80%] lg:text-[100%] font-poppins">
              Sígueme
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
