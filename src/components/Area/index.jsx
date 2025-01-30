import React, { useState } from "react";
import { DiJavascript } from "react-icons/di";
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
    <div className="container mx-auto my-20 px-4" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="about-me-section w-full md:w-3/4 ">
          <h2 className="text-[200%] text-black font-bold mb-4 flex items-center gap-2">
            <FaBriefcase className="text-[#5e17eb]" />
            Mi Experiencia
          </h2>

          <span className="font-poppins text-[#000080] text-justify leading-relaxed tracking-wide text-[100%]">
            Soy un desarrollador frontend especializado en crear interfaces
            intuitivas, rápidas y optimizadas para mejorar la experiencia del
            usuario y maximizar conversiones.
            <br />
            <br />
            Trabajo con ReactJS, TypeScript, Astro, TailwindCSS y JavaScript,
            además de herramientas como Redux, Strapi y Azure DevOps.
            <br />
            <br />
            Me enfoco en UX/UI, optimización de rendimiento y estrategias de
            tráfico digital, combinando SEO, analítica y diseño estratégico para
            aumentar la visibilidad y conversión.
            <br />
            <br />
            También integro APIs, servicios en la nube (AWS, Azure) y
            metodologías ágiles como Scrum para garantizar soluciones escalables
            y eficientes.
            <br />
            <br />
            Si buscas mejorar tu plataforma digital, te ayudo a transformar
            ideas en experiencias atractivas y efectivas que potencien tu
            negocio.
          </span>
        </div>

        <div>
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 ${
                activeTab === "skills"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Habilidades
            </button>

            <button
              className={`py-2 px-4 ${
                activeTab === "education"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Educación
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "skills" && (
              <div>
                <h3 className="text-[100%] font-semibold mb-2">Habilidades</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <FaReact className="text-[100%] text-[#61DAFB]" />
                    <span className="text-[100%] text-[#000080]">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHtml5 className="text-[100%] text-[#E34F26]" />
                    <span className="text-[100%] text-[#000080]">HTML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTypescript className="text-[100%] text-[#3178C6]" />
                    <span className="text-[100%] text-[#000080]">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiJavascript className="text-[100%] text-[#F7DF1E]" />
                    <span className="text-[100%] text-[#000080]">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCss3Alt className="text-[100%] text-[#1572B6]" />
                    <span className="text-[100%] text-[#000080]">CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTailwindcss className="text-[100%] text-[#06B6D4]" />
                    <span className="text-[100%] text-[#000080]">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiFirebase className="text-[100%] text-[#FFCA28]" />
                    <span className="text-[100%] text-[#000080]">Firebase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiOpenai className="text-[100%] text-[#412991]" />
                    <span className="text-[100%] text-[#000080]">OpenIA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMobileAlt className="text-[100%] text-gray-600" />
                    <span className="text-[100%] text-[#000080]">
                      Responsive Design
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiAstro className="text-[100%] text-[#FF5D01]" />
                    <span className="text-[100%] text-[#000080]">Astro JS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSearchengin className="text-[100%] text-[#47C2FF]" />
                    <span className="text-[100%] text-[#000080]">SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWordpress className="text-[100%] text-[#21759B]" />
                    <span className="text-[100%] text-[#000080]">
                      WordPress
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShoppingCart className="text-[100%] text-[#96588A]" />
                    <span className="text-[100%] text-[#000080]">
                      WooCommerce
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiCpanel className="text-[100%] text-[#FF6C2C]" />
                    <span className="text-[100%] text-[#000080]">cPanel</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBootstrap className="text-[100%] text-[#7952B3]" />
                    <span className="text-[100%] text-[#000080]">
                      Bootstrap
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <SiStrapi className="text-[100%] text-[#2F2E8B]" />
                    <span className="text-[100%] text-[#000080]">Strapi</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaServer className="text-[100%] text-gray-600" />
                    <span className="text-[100%] text-[#000080]">API REST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiPostman className="text-[100%] text-[#FF6C37]" />
                    <span className="text-[100%] text-[#000080]">Postman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiJira className="text-[100%] text-[#0052CC]" />
                    <span className="text-[100%] text-[#000080]">JIRA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiNotion className="text-[100%] text-black" />
                    <span className="text-[100%] text-[#000080]">Notion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrello className="text-[100%] text-[#0079BF]" />
                    <span className="text-[100%] text-[#000080]">Trello</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-[100%] text-[#1F73B7]" />
                    <span className="text-[100%] text-[#000080]">SCRUM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFigma className="text-[100%] text-[#F24E1E]" />
                    <span className="text-[100%] text-[#000080]">Figma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiMysql className="text-[100%] text-[#4479A1]" />
                    <span className="text-[100%] text-[#000080]">SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiOracle className="text-[100%] text-[#F80000]" />
                    <span className="text-[100%] text-[#000080]">Oracle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiMongodb className="text-[100%] text-[#47A248]" />
                    <span className="text-[100%] text-[#000080]">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaNodeJs className="text-[100%] text-[#339933]" />
                    <span className="text-[100%] text-[#000080]">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGitAlt className="text-[100%] text-[#F05032]" />
                    <span className="text-[100%] text-[#000080]">Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaDocker className="text-[100%] text-[#2496ED]" />
                    <span className="text-[100%] text-[#000080]">CI/CD</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <h3 className="text-[100%] font-semibold mb-2">Educación</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#9aca3c] pl-4">
                    <h4 className="font-semibold text-[100%] text-[#000080]">
                      Universidad Tecnológica de Pereira
                    </h4>
                    <p className="text-[100%] text-gray-600">
                      Ingeniería de Sistemas y Computación
                    </p>
                    <p className="text-[100%] text-gray-500">2007 - 2012</p>
                  </div>

                  <div className="border-l-4 border-[#9aca3c] pl-4">
                    <h4 className="font-semibold text-[100%] text-[#000080]">
                      Certificación en Metodologías Ágiles
                    </h4>
                    <p className="text-[100%] text-gray-600">En proceso</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[100%] text-[#000080] mb-3">
                      Cursos y Certificaciones
                    </h4>
                    <ul className="space-y-2 text-[100%] text-gray-600">
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
