import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "./assets/Curriculum vitae - Joaquín Klein.pdf";

//! Fotos:
import foto from "./assets/foto transparente.png";

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

//todo FRONT
import { BiLogoJavascript } from "react-icons/bi"; //<BiLogoJavascript />
import { BiLogoTypescript } from "react-icons/bi"; //<BiLogoTypescript />
import { FaHtml5 } from "react-icons/fa"; //<FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; //<FaCss3Alt />
import { FaReact } from "react-icons/fa"; //<FaReact />
import { SiRedux } from "react-icons/si"; //<SiRedux />
import { RiTailwindCssFill } from "react-icons/ri"; //<RiTailwindCssFill />

//todo BACK
import { FaNodeJs } from "react-icons/fa"; //<FaNodeJs />
import { SiExpress } from "react-icons/si"; //<SiExpress />
import { SiSequelize } from "react-icons/si"; //<SiSequelize />
import { BiLogoPostgresql } from "react-icons/bi"; //<BiLogoPostgresql />

//todo APRENDIENDO
import { SiNextdotjs } from "react-icons/si"; //<SiNextdotjs />
import { SiSocketdotio } from "react-icons/si"; //<SiSocketdotio />
import { FaAngular } from "react-icons/fa"; //<FaAngular />

function App() {
    const [showMoreMC, setShowMoreMC] = useState(false);
    const handleMC = () => {
        setShowMoreMC(!showMoreMC);
    };

    const [showMoreOB, setShowMoreOB] = useState(false);
    const handleOB = () => {
        setShowMoreOB(!showMoreOB);
    };

    const [showMoreCA, setShowMoreCA] = useState(false);
    const handleCA = () => {
        setShowMoreCA(!showMoreCA);
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
            {/* HOME **************************************************************************** */}
            <div className="bg-black-0 h-screen max-w-screen flex flex-col items-center justify-between">
                <div
                    className="bg-green-0 flex mv:flex-col md:flex-row mv:h-[600px] md:w-[650px] lg:w-[850px] mv:w-[300px] md:h-[300px] lg:h-[400px] p-10 font-mono mv:mt-28 md:mt-40"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    <div>
                        <img
                            src={foto}
                            alt="Foto de Joaquin Klein"
                            className="md:max-w-56 lg:max-w-80 md:max-h-56  lg:max-h-80"
                        />
                    </div>
                    <div className="flex flex-col justify-between mv:items-center md:items-start mv:mt-2 mv:ml-0 md:mt-0 md:ml-10">
                        <div className="text-black-0">
                            <h1 className="mv:text-3xl md:text-3xl lg:text-5xl font-semibold">Joaquín Klein</h1>
                            <p className="mv:text-xl md:text-xl lg:text-3xl mt-2 font-semibold">Frontend Developer</p>
                            <p className="md:text-sm lg:text-xl mt-2 text-purple-0 font-semibold">
                                Entusiasta del diseño y de la creación de experiencias digitales.
                            </p>
                        </div>

                        <div className="flex mv:flex-col md:flex-row justify-between w-full text-center">
                            <a href="#aboutMe" className="button">
                                Sobre mí
                            </a>
                            <a href="#proyects" className="button">
                                Proyectos
                            </a>
                            <a href="#contact" className="button">
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
                <a
                    href="#aboutMe"
                    className="mv:p-6 md:p-4 xl:p-6 bg-white-0 rounded-full shadow-xl mb-14 animate-bounce"
                >
                    <FaArrowDown className="text-xl" />
                </a>
            </div>

            {/* ABOUT ME **************************************************************************** */}
            <div
                id="aboutMe"
                className="bg-white-0 max-w-screen text-black-0 font-mono pt-10 pb-20 mv:px-4 sm:px-10 xl:px-60"
            >
                <h2 className="font-semibold text-4xl" data-aos="fade-right">
                    Sobre mí
                </h2>
                <p className="mv:ml-5 sm:ml-20 mt-5 mv:text-sm sm:text-xl md:text-2xl" data-aos="fade-right">
                    Desarrollador Frontend y compositor musical. Comencé mis estudios en tecnóloga como autodidacta,
                    aprendiendo las bases del desarrollo web, conocimientos que amplié en mi paso por distintos cursos.
                    Siempre estoy incorporando nuevas tecnologías y profundizando en las que ya conozco para mejorar mis
                    habilidades.
                </p>
                <h3 className="font-semibold sm:text-3xl md:text-4xl mt-10" data-aos="fade-right">
                    Stack de tecnologías
                </h3>
                <div className="mt-5">
                    <div className="flex md:ml-14 xl:ml-20" data-aos="fade-left">
                        {/* FRONT */}
                        <p className="font-semibold sm:text-xl md:text-2xl mv:mt-6 sm:mt-14 md:mt-8 mv:w-auto md:w-32">
                            Frontend:
                        </p>
                        <div className="flex flex-wrap">
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">JavaScript</p>
                                <BiLogoJavascript className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">TypeScript</p>
                                <BiLogoTypescript className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">HTML</p>
                                <FaHtml5 className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">CSS</p>
                                <FaCss3Alt className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Tailwind</p>
                                <RiTailwindCssFill className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">React</p>
                                <FaReact className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardFront">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Redux</p>
                                <SiRedux className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 md:ml-14 xl:ml-20" data-aos="fade-left">
                        {/* BACK */}
                        <p className="font-semibold sm:text-xl md:text-2xl mv:mt-3 sm:mt-1 md:mt-3 mv:w-auto md:w-32">
                            Backend:
                        </p>
                        <div className="flex flex-wrap">
                            <div className="flex items-center bg-green-0 text-black-0 font-semibold p-3 ml-2 mt-4">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">NodeJS</p>
                                <FaNodeJs className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Express</p>
                                <SiExpress className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">Sequelize</p>
                                <SiSequelize className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                            <div className="cardBack">
                                <p className="mv:hidden sm:flex sm:text-md md:text-xl">PostgreSQL</p>
                                <BiLogoPostgresql className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 md:ml-14 xl:ml-20" data-aos="fade-left">
                        {/* ACTUAL */}
                        <p className="font-semibold  sm:text-xl md:text-2xl mt-4">Actualmente estoy aprendiendo:</p>
                        <div className="cardActual">
                            <p className="mv:hidden sm:flex sm:text-md md:text-xl">Next</p>
                            <SiNextdotjs className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                        </div>
                        <div className="cardActual">
                            <p className="mv:hidden sm:flex sm:text-md md:text-xl">Socket.io</p>
                            <SiSocketdotio className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                        </div>
                        <div className="cardActual">
                            <p className="mv:hidden sm:flex sm:text-md md:text-xl">Angular</p>
                            <FaAngular className="sm:text-2xl md:text-4xl mv:ml-0 sm:ml-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* PROYECTS ****************************************************************************** */}
            <div
                id="proyects"
                className="bg-purple-0 max-w-screen text-white-0 font-mono pt-10 pb-20  mv:px-4 sm:px-10 xl:px-60"
            >
                <h2 className=" text-4xl" data-aos="fade-right">
                    Proyectos
                </h2>
                <div className="mt-5 mv:px-4 sm:px-10 flex flex-col items-center" data-aos="fade-left">
                    {/* MI CANCIONERO */}
                    <div
                        className={
                            showMoreMC
                                ? "bg-black-0 p-4 flex flex-col max-w-[1160px]"
                                : "bg-black-0 p-4 flex items-center max-w-[1160px]"
                        }
                    >
                        <img
                            src="https://media.licdn.com/dms/image/D4D2DAQEz3rwnbWw5og/profile-treasury-image-shrink_800_800/0/1719334310715?e=1721761200&v=beta&t=FdoVO8OPk7N_an1hbB-kaUppvIsDJ-UzHFWJw7c1_v0"
                            alt="Mi cancionero Home"
                            className={showMoreMC ? "hidden" : "md2:flex mv:hidden h-[160px] w-[305px]"}
                        />
                        <div className="ml-3">
                            <div className="flex flex-col h-[160px] justify-between">
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold mv:text-lg sm:text-xl md:text-2xl mb-1">
                                            Mi Cancionero
                                        </h3>
                                        <div className="flex text-2xl text-green-0">
                                            <a
                                                href="https://mi-cancionero.onrender.com/"
                                                className="hover:text-purple-0 duration-100"
                                                target="_blanck"
                                            >
                                                <FaRocket className="mr-5" />
                                            </a>
                                            <a
                                                href="https://github.com/KJoaquinklein/miCancioneroFRONT"
                                                className="hover:text-purple-0 duration-100"
                                                target="_blanck"
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="mv:text-xs sm:text-sm md:text-md">
                                        Aplicación que funciona como cancionero personal. Consta de tres secciones, una
                                        donde el usuario puede ver las canciones registradas, otra donde le permite
                                        cargar una nueva canción, y por ultimo donde puede ver la letra y reproducirla
                                        para ensayar.
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex text-2xl space-x-2">
                                        <BiLogoTypescript className="text-purple-0" />
                                        <FaReact className="text-purple-0" />
                                        <SiRedux className="text-purple-0" />
                                        <RiTailwindCssFill className="text-purple-0" />
                                        <SiExpress className="text-green-0" />
                                    </div>
                                    <button className="text-green-0 hover:underline" onClick={handleMC}>
                                        {showMoreMC ? <>Ver menos</> : <>Ver más</>}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={showMoreMC ? "flex overflow-auto justify-between mt-4" : "hidden"}>
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQEz3rwnbWw5og/profile-treasury-image-shrink_800_800/0/1719334310715?e=1721761200&v=beta&t=FdoVO8OPk7N_an1hbB-kaUppvIsDJ-UzHFWJw7c1_v0"
                                className="h-36 mr-2"
                            />
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQEM2zpjLgyJTA/profile-treasury-image-shrink_800_800/0/1719334340431?e=1721779200&v=beta&t=7yyjO9jx9JGWYY8aqhx4C_JgEt-57eTrS759e7KwbMo"
                                className="h-36 mr-2"
                            />
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQFPYcD13HIatA/profile-treasury-image-shrink_800_800/0/1719334372818?e=1721779200&v=beta&t=lqnGVPg8DIzeo8Rvhi-doV-dptMoz5JaCNou7_g1ckE"
                                className="h-36 mr-2"
                            />
                        </div>
                    </div>

                    {/* OPEN BOOK */}
                    <div
                        className={
                            showMoreOB
                                ? "bg-black-0 p-4 flex flex-col mt-4 max-w-[1160px]"
                                : "bg-black-0 p-4 flex mt-4 max-w-[1160px]"
                        }
                    >
                        <img
                            src="https://media.licdn.com/dms/image/D4D2DAQGAIFQ8_R1BHg/profile-treasury-image-shrink_800_800/0/1715708042946?e=1721779200&v=beta&t=AHc6K-qdiKtbS28PL1AJFsZ_MYcPF19WZsl26lMM9GE"
                            alt="OpenBook Home"
                            className={showMoreOB ? "hidden" : "md2:flex mv:hidden h-[160px] w-[305px]"}
                        />
                        <div className="flex flex-col  h-[160px] justify-between ml-3">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        OpenBook Library
                                    </h3>
                                    <div className="flex text-2xl text-green-0">
                                        <a
                                            href="https://test-deploy--openbookstore.netlify.app/"
                                            className="hover:text-purple-0 duration-100"
                                            target="_blanck"
                                        >
                                            <FaRocket className="mr-5" />
                                        </a>
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
                                    <BiLogoJavascript className="text-purple-0" />
                                    <FaReact className="text-purple-0" />
                                    <SiRedux className="text-purple-0" />
                                    <RiTailwindCssFill className="text-purple-0" />
                                    <SiExpress className="text-green-0" />
                                    <SiSequelize className="text-green-0" />
                                    <BiLogoPostgresql className="text-green-0" />
                                    <SiSocketdotio className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline w-20" onClick={handleOB}>
                                    {showMoreOB ? <>Ver menos</> : <>Ver más</>}
                                </button>
                            </div>
                        </div>
                        <div className={showMoreOB ? "flex overflow-auto  justify-between mt-4" : "hidden"}>
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQGAIFQ8_R1BHg/profile-treasury-image-shrink_800_800/0/1715708042946?e=1721779200&v=beta&t=AHc6K-qdiKtbS28PL1AJFsZ_MYcPF19WZsl26lMM9GE"
                                className="h-36 mr-2"
                            />
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQH23scvA-fYpQ/profile-treasury-image-shrink_800_800/0/1715708069730?e=1721779200&v=beta&t=8ObPCUXa-04YkMd5hv2xPVhh9sAOqdrt8MZwsaKgfBA"
                                className="h-36 mr-2"
                            />
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQGx_I67F4dhVA/profile-treasury-image-shrink_800_800/0/1715708090090?e=1721779200&v=beta&t=UFNDEd27i2qppqwyFaKtRzd3LzdD1tpNWrZ_7gNKr2Q"
                                className="h-36 mr-2"
                            />
                        </div>
                    </div>

                    {/* COUNTRY APP */}
                    <div
                        className={
                            showMoreCA
                                ? "bg-black-0 p-4 flex flex-col mt-4 max-w-[1160px]"
                                : "bg-black-0 p-4 flex mt-4 max-w-[1160px]"
                        }
                    >
                        <img
                            src="https://media.licdn.com/dms/image/D4D2DAQFuIzMbmLYvoQ/profile-treasury-image-shrink_800_800/0/1715705888959?e=1721782800&v=beta&t=IbXmjUQ-rkebmhl9ZBtIlMuypC_NQOktUaqdGLgGRt4"
                            alt="Country app Home"
                            className={showMoreCA ? "hidden" : "md2:flex mv:hidden h-[160px] w-[305px]"}
                        />
                        <div className="ml-3  h-[160px] flex flex-col justify-between">
                            <div>
                                <div className="flex  justify-between">
                                    <h3 className="font-semibold  mv:text-lg sm:text-xl md:text-2xl mb-1">
                                        Country app
                                    </h3>
                                    <div className="flex text-2xl text-green-0">
                                        <a
                                            href="https://github.com/KJoaquinklein/PI-countries-Joaquin-Klein"
                                            className="hover:text-purple-0 duration-100"
                                            target="_blanck"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <p className="mv:text-xs sm:text-sm md:text-md">
                                    Aplicación donde podemos ver información y actividades turísticas de cada país, como
                                    también crear una actividad turística para uno o mas paises. También podemos
                                    filtrar, ordenar los paises o buscarlo por su nombre.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex text-2xl space-x-2">
                                    <BiLogoJavascript className="text-purple-0" />
                                    <FaReact className="text-purple-0" />
                                    <SiRedux className="text-purple-0" />
                                    <FaCss3Alt className="text-purple-0" />
                                    <SiExpress className="text-green-0" />
                                    <SiSequelize className="text-green-0" />
                                    <BiLogoPostgresql className="text-green-0" />
                                </div>
                                <button className="text-green-0 hover:underline" onClick={handleCA}>
                                    {showMoreCA ? <>Ver menos</> : <>Ver más</>}
                                </button>
                            </div>
                        </div>
                        <div className={showMoreCA ? "flex justify-between mt-4" : "hidden"}>
                            <img
                                src="https://media.licdn.com/dms/image/D4D2DAQFuIzMbmLYvoQ/profile-treasury-image-shrink_800_800/0/1715705888959?e=1721782800&v=beta&t=IbXmjUQ-rkebmhl9ZBtIlMuypC_NQOktUaqdGLgGRt4"
                                className="h-36"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT ******************************************************************************* */}
            <div
                id="contact"
                className="bg-green-0 max-w-screen text-black-0 font-mono pt-10  mv:px-4 sm:px-10 xl:px-60 font-semibold"
            >
                <h2 className="text-4xl" data-aos="fade-right">
                    Contacto
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
