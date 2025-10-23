import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "./assets/Curriculum vitae - Joaquín Klein.pdf";
import Carousel from "react-bootstrap/Carousel";

//! Fotos:
import foto from "./assets/foto2.jpg";

//! Proyectos:
import OBHome from "./assets/OBHome.jfif";
import OB2 from "./assets/OB2.jfif";
import OB3 from "./assets/OB3.jfif";
import EBDHHome from "./assets/EBDHHome.jpg";
import EBDH2 from "./assets/EBDH2.jpg";
import EBDH3 from "./assets/EBDH3.jpg";

import D1 from "./assets/D1.jpg";
import D2 from "./assets/D2.jpg";
import D3 from "./assets/D3.jpg";

import S1 from "./assets/S1.jpg";
import S2 from "./assets/S2.jpg";
import S3 from "./assets/S3.jpg";
import S4 from "./assets/S4.jpg";
import S5 from "./assets/S5.jpg";

//! Icons:
import { FaArrowDown } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6"; //<FaRocket />
import { FaGithub } from "react-icons/fa"; //<FaGithub />
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";
import { SiAstro } from "react-icons/si";

//todo FRONT
import { BiLogoJavascript } from "react-icons/bi"; //<BiLogoJavascript />
import { BiLogoTypescript } from "react-icons/bi"; //<BiLogoTypescript />
import { FaHtml5 } from "react-icons/fa"; //<FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; //<FaCss3Alt />
import { FaReact } from "react-icons/fa"; //<FaReact />
import { SiRedux } from "react-icons/si"; //<SiRedux />
import { RiTailwindCssFill } from "react-icons/ri"; //<RiTailwindCssFill />
import { IoLogoElectron } from "react-icons/io5";

//todo BACK
import { FaNodeJs } from "react-icons/fa"; //<FaNodeJs />
import { SiExpress } from "react-icons/si"; //<SiExpress />
import { SiSequelize } from "react-icons/si"; //<SiSequelize />
import { BiLogoPostgresql } from "react-icons/bi"; //<BiLogoPostgresql />
import { SiSqlite } from "react-icons/si";

//todo APRENDIENDO
import { SiNextdotjs } from "react-icons/si"; //<SiNextdotjs />
import { SiSocketdotio } from "react-icons/si"; //<SiSocketdotio />
import { FaAngular } from "react-icons/fa"; //<FaAngular />

function App() {
    const [C, SC] = useState("");
    const handleC = (T) => {
        SC(T);
    };

    //*---- funcion para copiar email -----
    const [showAlert, setShowAlert] = useState(false);

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText("joaquinfsd@hotmail.com");
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="overflow-hidden">
            {/* ABOUT ME **************************************************************************** */}
            <div
                id="aboutMe"
                className="bg-white-0 max-w-screen text-black-0 font-mono pt-10 pb-5 mv:px-4 sm:px-10 xl:px-60"
            >
                <h2 className="font-semibold text-4xl" data-aos="fade-right">
                    Hola! Mi nombre es Joaquín Klein 👋🏼
                </h2>
                <p className="mv:ml-5 sm:ml-20 mt-5 mv:text-sm sm:text-xl md:text-2xl" data-aos="fade-right">
                    Soy desarrollador frontend y de sistemas de gestión. Comencé mis estudios en tecnología como
                    autodidacta, aprendiendo las bases del desarrollo web, conocimientos que amplié en mi paso por
                    distintos cursos. Actualmente me encuentro desarrollando distintos sistemas de gestión para
                    comercios locales y pequeñas empresas.
                </p>

                <h3 className="font-semibold sm:text-3xl md:text-4xl mt-10" data-aos="fade-right">
                    Me especializo en 👨🏻‍💻
                </h3>
                <div className="mt-5">
                    <div className="flex md:ml-14 xl:ml-20" data-aos="fade-left">
                        <div className="flex flex-wrap">
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">JavaScript</p>
                                <BiLogoJavascript className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">HTML</p>
                                <FaHtml5 className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">CSS</p>
                                <FaCss3Alt className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Tailwind</p>
                                <RiTailwindCssFill className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">React</p>
                                <FaReact className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Astro</p>
                                <SiAstro className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Electron</p>
                                <IoLogoElectron className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">SQLite</p>
                                <SiSqlite className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="font-semibold sm:text-3xl md:text-4xl mt-10" data-aos="fade-right">
                    Me familiarizo con 🙋🏻‍♂️
                </h3>
                <div className="mt-5">
                    <div className="flex md:ml-14 xl:ml-20" data-aos="fade-left">
                        <div className="flex flex-wrap">
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">TypeScript</p>
                                <BiLogoTypescript className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>

                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Redux</p>
                                <SiRedux className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Express</p>
                                <SiExpress className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Sequelize</p>
                                <SiSequelize className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">PostgreSQL</p>
                                <BiLogoPostgresql className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center pt-14">
                    <a
                        href="#proyectos_y_trabajos"
                        className="mv:p-6 md:p-4 xl:p-6 bg-black-0 rounded-full shadow-xl animate-bounce"
                    >
                        <FaArrowDown className="text-x text-white-0" />
                    </a>
                </div>
            </div>

            {/* PROYECTS ****************************************************************************** */}
            <div
                id="proyectos_y_trabajos"
                className="bg-purple-0 max-w-screen text-white-0 font-mono pt-10 pb-20  mv:px-4 sm:px-10 xl:px-60"
            >
                <h2 className=" text-4xl" data-aos="fade-right">
                    Proyectos y Trabajos 📁
                </h2>
                <div className="mt-5 mv:px-4 sm:px-10 flex flex-col items-center" data-aos="fade-left">
                    {/* SISTEMAS */}
                    <div className="bg-black-0 p-4 flex mt-4 max-w-[1160px]">
                        <img src={S1} alt="OpenBook Home" className="md2:flex mv:hidden h-[160px] w-[305px]" />
                        <div className="flex flex-col  h-[160px] justify-between ml-3">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        Sistemas de Gestión
                                    </h3>
                                </div>
                                <p className="mv:text-xs sm:text-sm md:text-md">
                                    Optimice la gestión de datos de comercios locales, distribuidoras de productos,
                                    fabricas y empresas agrícolas, desarrollando de manera individual y grupal diversos
                                    sistemas de gestión de stock, productos, ventas, compras y facturación.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-wrap text-2xl space-x-2">
                                    <BiLogoJavascript className="text-green-0" />
                                    <FaReact className="text-green-0" />
                                    <IoLogoElectron className="text-green-0" />
                                    <RiTailwindCssFill className="text-green-0" />
                                    <SiExpress className="text-green-0" />
                                    <SiSequelize className="text-green-0" />
                                    <BiLogoPostgresql className="text-green-0" />
                                    <SiSqlite className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline w-20" onClick={() => handleC("S")}>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* DISTRITO */}
                    <div className="bg-black-0 p-4 flex mt-4 max-w-[1160px]">
                        <img src={D1} alt="OpenBook Home" className="md2:flex mv:hidden h-[160px] w-[305px]" />
                        <div className="flex flex-col  h-[160px] justify-between ml-3">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        Distrito Z
                                    </h3>
                                </div>
                                <p className="mv:text-xs sm:text-sm md:text-md">
                                    Landing page para un proyecto inmobiliario llamado "Distrito Z". Partiendo de la
                                    maqueta proporcionada, desarrolle la logica y la componentización en Astro.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-wrap text-2xl space-x-2">
                                    <BiLogoJavascript className="text-green-0" />
                                    <SiAstro className="text-green-0" />
                                    <FaCss3Alt className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline w-20" onClick={() => handleC("D")}>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* OPEN BOOK */}
                    <div className="bg-black-0 p-4 flex mt-4 max-w-[1160px]">
                        <img src={OBHome} alt="OpenBook Home" className="md2:flex mv:hidden h-[160px] w-[305px]" />
                        <div className="flex flex-col  h-[160px] justify-between ml-3">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        OpenBook Library
                                    </h3>
                                    <div className="flex text-2xl text-green-0">
                                        <a
                                            href="https://github.com/openbookpf"
                                            className="hover:text-purple-0 duration-100"
                                            target="_blanck"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <p className="mv:text-xs sm:text-sm md:text-md">
                                    Ecommerce para la venta de libros en el que participe como desarrollador Frontend y
                                    parte del Backend en la implementacion de un chat en vivo.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-wrap text-2xl space-x-2">
                                    <BiLogoJavascript className="text-green-0" />
                                    <FaReact className="text-green-0" />
                                    <SiRedux className="text-green-0" />
                                    <RiTailwindCssFill className="text-green-0" />
                                    <SiExpress className="text-green-0" />
                                    <SiSequelize className="text-green-0" />
                                    <BiLogoPostgresql className="text-green-0" />
                                    <SiSocketdotio className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline w-20" onClick={() => handleC("OB")}>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* EL BIGOTE DE HORACIO */}
                    <div className="bg-black-0 p-4 flex mt-4 max-w-[1160px]">
                        <img src={EBDHHome} alt="Country app Home" className="md2:flex mv:hidden h-[160px] w-[305px]" />
                        <div className="ml-3  h-[160px] flex flex-col justify-between">
                            <div>
                                <div className="flex  justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        El Bigote De Horacio
                                    </h3>
                                    <div className="flex text-2xl text-green-0">
                                        <a
                                            href="https://elbigotedehoracio-page.vercel.app/"
                                            className="hover:text-purple-0 duration-100"
                                            target="_blanck"
                                        >
                                            <FaRocket className="mr-5" />
                                        </a>
                                        <a
                                            href="https://github.com/KJoaquinklein/ElBigoteDeHoracioPage"
                                            className="hover:text-purple-0 duration-100"
                                            target="_blanck"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <p className="mv:text-xs sm:text-sm md:text-md">
                                    Landing page para una banda llamada "El Bigote De Horacio", donde podrás encontrar
                                    la discografía de la banda, biografía y métodos de contacto.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex text-2xl space-x-2 flex-wrap">
                                    <SiAstro className="text-green-0" />
                                    <RiTailwindCssFill className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline" onClick={() => handleC("EBDH")}>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Carrucel setClose={SC} proyecto={C} />

            {/* CONTACT ******************************************************************************* */}
            <div
                id="contact"
                className="bg-green-0 max-w-screen text-black-0 font-mono pt-10  mv:px-4 sm:px-10 xl:px-60 font-semibold"
            >
                <h2 className="text-4xl" data-aos="fade-right">
                    Contacto ☎️
                </h2>
                <div className="flex mv:mx-4 md:mx-20 mt-4 justify-center flex-wrap" data-aos="fade-left">
                    <a
                        href="https://www.linkedin.com/in/joaqu%C3%ADn-klein-404b47304/"
                        target="_blanck"
                        className="contactCard"
                    >
                        <FaLinkedin className="" />
                        <p className="ml-2">LinkedIn</p>
                    </a>
                    <a href="https://github.com/KJoaquinklein" target="_blanck" className="contactCard">
                        <FaGithubSquare className="" />
                        <p className="ml-2">GitHub</p>
                    </a>
                    <a href={CV} download="CV-Joaquin-Klein" className="contactCard">
                        <FaFileDownload className="" />
                        <p className="ml-2">Descargar CV</p>
                    </a>
                    <p className="contactCard">
                        <MdEmail className="" />
                        <p className="ml-2">Email</p>
                        {showAlert ? (
                            <FiCheck className="ml-5 cursor-pointer text-green-0" />
                        ) : (
                            <FaCopy className="ml-5 cursor-pointer" onClick={handleCopyEmail} />
                        )}
                    </p>
                </div>
                <p className="text-3xl pb-40 mt-8 text-center" data-aos="fade-right">
                    ¡No dudes en contactarme!
                </p>
            </div>
        </div>
    );
}

export default App;

const Carrucel = ({ proyecto, setClose }) => {
    return (
        <div
            className={
                proyecto
                    ? "w-screen h-screen fixed top-0 bottom-0 left-0 flex flex-col justify-center z-50 bg-[#000]/85 font-mono"
                    : "hidden"
            }
        >
            <div className="flex justify-end pt-10 pr-10 text-green-0 hover:underline text-2xl">
                <button onClick={() => setClose("")}>Cerrar</button>
            </div>
            <div className="w-[95vw] lg:w-[50vw] mx-auto">
                <div className={proyecto === "OB" ? "space-y-5 h-[100vh] overflow-auto py-28 scrollbar" : "hidden"}>
                    <img src={OBHome} />

                    <img src={OB2} />

                    <img src={OB3} />
                </div>
                <div className={proyecto === "EBDH" ? "space-y-5 h-[100vh] overflow-auto py-28 scrollbar" : "hidden"}>
                    <img src={EBDHHome} />

                    <img src={EBDH2} />

                    <img src={EBDH3} />
                </div>
                <div className={proyecto === "D" ? "space-y-5 h-[100vh] overflow-auto py-28 scrollbar" : "hidden"}>
                    <img src={D1} />

                    <img src={D2} />

                    <img src={D3} />
                </div>
                <div className={proyecto === "S" ? "space-y-5 h-[100vh] overflow-auto py-28 scrollbar" : "hidden"}>
                    <img src={S1} />

                    <img src={S2} />

                    <img src={S3} />

                    <img src={S4} />

                    <img src={S5} />
                </div>
            </div>
        </div>
    );
};
