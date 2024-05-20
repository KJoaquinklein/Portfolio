import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
    return (
        <div id="technologies" className="font-port bg-black-0 mv:pb-5 md:pb-40 max-w-screen flex justify-center">
            <div className="pt-5 mv:w-screen sm:w-2/3 flex flex-col">
                <h2 className="text-white-0 text-3xl mb-10 mv:pl-4 sm:pl-0">Tecnologías</h2>
                <div className="flex justify-center">
                    <div className="flex flex-wrap text-white-0 justify-center mt-5">
                        <div className="text-[#F16529] text-7xl flex items-center mv:w-56 md:w-72 mb-8 ">
                            <FaHtml5 />
                            <p className="text-white-0 text-xl ml-3">HTML</p>
                        </div>
                        <div className="text-[#2965F1] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <FaCss3Alt />
                            <p className="text-white-0 text-xl ml-3">CSS</p>
                        </div>
                        <div className="text-[#F0DB4F] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <IoLogoJavascript />
                            <p className="text-white-0 text-xl ml-3">JavaScript</p>
                        </div>
                        <div className="text-[#149ECA] text-7xl flex items-center mv:w-56 md:w-72 mb-8 ">
                            <FaReact />
                            <p className="text-white-0 text-xl ml-3">React.js</p>
                        </div>
                        <div className="text-[#7248B8] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <SiRedux />
                            <p className="text-white-0 text-xl ml-3">Redux</p>
                        </div>
                        <div className="text-[#38BDF8] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <RiTailwindCssFill />
                            <p className="text-white-0 text-xl ml-3">Tailwind CSS</p>
                        </div>
                        <div className="text-[#539E43] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <FaNodeJs />
                            <p className="text-white-0 text-xl ml-3">Node.js</p>
                        </div>
                        <div className="text-white-0 text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <SiExpress />
                            <p className="text-white-0 text-xl ml-3">Express</p>
                        </div>
                        <div className="text-[#2F6190] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <BiLogoPostgresql />
                            <p className="text-white-0 text-xl ml-3">PostgreSQL</p>
                        </div>
                        <div className="text-[#29B1EF] text-7xl flex items-center mv:w-56 md:w-72 mb-8">
                            <SiSequelize />
                            <p className="text-white-0 text-xl ml-3">Sequelize</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
