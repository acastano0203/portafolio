import React from "react";
import { FaLinkedin, FaCode, FaReact } from "react-icons/fa";
import { BiSolidRocket } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import perfil from "../../assets/foto5.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full  md:h-48 gap-6 md:gap-0">
        <h1 className="text-[100%] md:text-[130%] lg:text-[200%] font-bold font-poppins md:px-10 lg:px-20 w-full md:w-1/2 lg:w-1/3 text-[#000080] text-center md:text-left">
          ¡Hola!{" "}
          <FaCode className="inline-block text-[100%] text-[rgba(73,19,180,0.8)]" />{" "}
          Soy{" "}
          <span className="text-[rgba(73,19,180,1)] font-bold font-poppins">
            Yamid castaño
          </span>{" "}
          <div className="inline-flex items-center gap-2">
            Frontend developer{" "}
            <span className="flex gap-3 items-center">
              <FaReact className="text-[100%]  text-blue-500 animate-spin-slow" />
              <BsLightningChargeFill className=" text-[100%] text-yellow-500" />
              <BiSolidRocket className="text-[100%] text-purple-500 animate-bounce" />
            </span>
          </div>
        </h1>
        <div className="w-full md:w-auto">
          <img
            src={perfil}
            alt="perfil"
            className="w-64 md:w-80 lg:w-96 mx-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-4 gap-4 mt-8 md:mt-4">
        <div className="flex gap-4 items-center animate-bounce">
          <a
            href="https://www.linkedin.com/in/yamidcastao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl text-[#0077b5] hover:opacity-80 flex items-center gap-2"
          >
            <FaLinkedin />
            <span className="text-base md:text-lg font-poppins ">Sígueme</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
