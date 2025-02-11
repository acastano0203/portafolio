import React, { useState } from "react";
import { DiJavascript } from "react-icons/di";
import "./styles.css";
import {
  FaBriefcase,
  FaWordpress,
  FaShoppingCart,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaMobileAlt,
  FaSearchengin,
  FaServer,
  FaUsers,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaTrello,
} from "react-icons/fa";
import {
  SiCpanel,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiStrapi,
  SiPostman,
  SiJira,
  SiNotion,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiFirebase,
  SiOpenai,
} from "react-icons/si";

const Area = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="container mx-auto my-20 px-10" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="about-me-section w-full md:w-3/4 text-justify">
          <h2 className="text-[100%] md:text-[150%] lg:text-[200%] text-black font-bold mb-12 flex items-center gap-4 animate-shimmer font-poppins">
            <FaBriefcase className="text-[#5e17eb] text-[100%] md:text-[150%] lg:text-[200%]" />
            Mi Experiencia
          </h2>

          <span className="font-poppins text-[#000080] text-justify leading-relaxed tracking-wide text-[100%] ">
            ¿Qué hace que una experiencia digital realmente conecte con su
            audiencia? No se trata solo de una interfaz atractiva, sino de la
            combinación perfecta entre diseño, funcionalidad y estrategia.
            <br />
            <br />
            Como desarrollador frontend y consultor web, me especializo en crear
            soluciones digitales que no solo optimizan la experiencia del
            usuario, sino que también potencian la visibilidad y el alcance de
            los proyectos. He trabajado con React y TypeScript para construir
            interfaces escalables y eficientes, utilizando Tailwind CSS para un
            diseño ágil y adaptable. Además, integro Redux y Axios para
            gestionar datos y mejorar el rendimiento en la comunicación con
            APIs.
            <br />
            <br />
            Pero una plataforma bien desarrollada no es suficiente si no llega a
            las personas adecuadas. Es por eso que también he explorado
            estrategias de tráfico digital en Meta, asegurando que los productos
            y servicios tengan la exposición correcta para atraer y convertir a
            la audiencia ideal.
            <br />
            <br />
            Mi enfoque combina tecnología y estrategia para transformar ideas en
            experiencias digitales impactantes y efectivas.
            <br />
            <br />
          </span>
        </div>

        <div>
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-poppins ${
                activeTab === "skills"
                  ? "border-b-2 border-blue-500 text-black font-bold text-[100%] md:text-[150%] lg:text-[150%]"
                  : "text-gray-500 hover:text-gray-700 text-[100%] md:text-[150%] lg:text-[150%]"
              } animate-shimmer`}
              onClick={() => setActiveTab("skills")}
            >
              Habilidades
            </button>

            <button
              className={`py-2 px-4 font-poppins ${
                activeTab === "education"
                  ? "border-b-2 border-blue-500 text-black font-bold text-[100%] md:text-[150%] lg:text-[150%]"
                  : "text-gray-500 hover:text-gray-700 text-[100%] md:text-[150%] lg:text-[150%]"
              } animate-shimmer`}
              onClick={() => setActiveTab("education")}
            >
              Educación
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "skills" && (
              <div>
                <h3 className="text-[100%] font-semibold mb-2 font-poppins">
                  Habilidades
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <FaReact className="text-[100%] text-[#61DAFB]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      React
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHtml5 className="text-[100%] text-[#E34F26]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      HTML
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTypescript className="text-[100%] text-[#3178C6]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiJavascript className="text-[100%] text-[#F7DF1E]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCss3Alt className="text-[100%] text-[#1572B6]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTailwindcss className="text-[100%] text-[#06B6D4]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiFirebase className="text-[100%] text-[#FFCA28]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Firebase
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiOpenai className="text-[100%] text-[#412991]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      OpenIA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMobileAlt className="text-[100%] text-gray-600  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Responsive Design
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiAstro className="text-[100%] text-[#FF5D01]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Astro JS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSearchengin className="text-[100%] text-[#47C2FF]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      SEO
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWordpress className="text-[100%] text-[#21759B]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      WordPress
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShoppingCart className="text-[100%] text-[#96588A]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      WooCommerce
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiCpanel className="text-[100%] text-[#FF6C2C]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      cPanel
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBootstrap className="text-[100%] text-[#7952B3]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Bootstrap
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <SiStrapi className="text-[100%] text-[#2F2E8B]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Strapi
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaServer className="text-[100%] text-gray-600  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      API REST
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiPostman className="text-[100%] text-[#FF6C37]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Postman
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiJira className="text-[100%] text-[#0052CC]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      JIRA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiNotion className="text-[100%] text-black  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Notion
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrello className="text-[100%] text-[#0079BF]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Trello
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-[100%] text-[#1F73B7]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      SCRUM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFigma className="text-[100%] text-[#F24E1E]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiMysql className="text-[100%] text-[#4479A1]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      SQL
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiOracle className="text-[100%] text-[#F80000]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Oracle
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiMongodb className="text-[100%] text-[#47A248]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaNodeJs className="text-[100%] text-[#339933]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Node.js
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGitAlt className="text-[100%] text-[#F05032]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      Git
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaDocker className="text-[100%] text-[#2496ED]  animate-spin-slow" />
                    <span className="text-[100%] text-[#000080] font-poppins">
                      CI/CD
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <h3 className="text-[100%] font-semibold mb-2 font-poppins">
                  Educación
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#9aca3c] pl-4">
                    <h4 className="font-semibold text-[100%] text-[#000080] font-poppins">
                      Universidad Tecnológica de Pereira
                    </h4>
                    <p className="text-[100%] text-gray-600 font-poppins">
                      Ingeniería de Sistemas y Computación
                    </p>
                    <p className="text-[100%] text-gray-500 font-poppins">
                      2007 - 2012
                    </p>
                  </div>

                  <div className="border-l-4 border-[#9aca3c] pl-4">
                    <h4 className="font-semibold text-[100%] text-[#000080] font-poppins">
                      Certificación en Metodologías Ágiles
                    </h4>
                    <p className="text-[100%] text-gray-600 font-poppins">
                      En proceso
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[100%] text-[#000080] mb-3 font-poppins">
                      Cursos y Certificaciones
                    </h4>
                    <ul className="space-y-2 text-[100%] text-gray-600 font-poppins">
                      <li>• Curso de React Avanzado</li>
                      <li>
                        • Curso de Clean Code y Buenas Prácticas con JavaScript
                      </li>
                      <li>• Curso de Frontend Developer</li>
                      <li>• Curso de TypeScript</li>
                      <li>
                        • Curso de Introducción a AWS: Fundamentos de Cloud
                        Computing
                      </li>
                      <li>• Curso de React.js con Vite.js y TailwindCSS</li>
                      <li>
                        • Curso de Creación y Optimización de Embudos de Venta
                      </li>
                      <li>• Curso de Docker: Fundamentos</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
