import miCV from "../../assets/mi-cv.pdf";
import { FaFilePdf, FaUser } from "react-icons/fa";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = miCV;
    link.download = "mi-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[#5e17eb]">
        {/* Columna de imagen */}
        <div className="flex items-center justify-center md:justify-end md:mr-24">
          <img
            src="/src/assets/expirience.png"
            alt="Perfil"
            className="w-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Columna de contenido */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-bold text-white flex flex-col md:flex-row items-center gap-4">
            <FaUser className="text-4xl" />
            Acerca de <span className="text-white text-[100%]">______</span>
          </h1>

          <span
            className="text-lg w-auto lg:w-96 text-white leading-relaxed tracking-wide animate-fade-in
            hover:transform hover:scale-102 transition-all duration-300 ease-in-out p-4 font-poppins text-justify text-[100%]"
          >
            Mi enfoque está en garantizar la calidad del software mediante la
            implementación de buenas prácticas, procesos eficientes y
            tecnologías modernas, mientras mantengo una actitud abierta al
            aprendizaje continuo y la adaptación a los cambios del entorno
            tecnológico.
          </span>

          <button
            onClick={handleDownload}
            className="bg-[#9aca3c] text-black w-auto md:w-48 py-3 rounded-full hover:bg-opacity-90 
            transition-all flex items-center justify-center gap-2"
          >
            <FaFilePdf className="text-[100%]" />

            <span className="text-[100%]">Descargar CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
