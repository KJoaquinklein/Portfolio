import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="font-port bg-black-0 max-w-screen flex justify-center">
            <div className="pt-5 mv:w-screen sm:w-2/3 flex flex-col">
                <h2 className="text-white-0 text-3xl mb-10 mv:pl-4 sm:pl-0">Contacto</h2>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center text-white-0  mt-5  mb-40">
                        <a
                            href="https://www.linkedin.com/in/joaqu%C3%ADn-klein-404b47304/"
                            target="_blanck"
                            className="mx-5 mb-5 flex items-center min-h-[32px] min-w-[81px]  px-3 py-2 border-2 border-blue-0 hover:border-orange-0 duration-300 text-2xl"
                        >
                            <FaLinkedin className="text-[#0A66C2]" />
                            <p className="ml-2">LinkedIn</p>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=5493533498996"
                            target="_blanck"
                            className=" mx-5 mb-5 flex items-center min-h-[32px] min-w-[81px]  px-3 py-2 border-2 border-blue-0 hover:border-orange-0 duration-300 text-2xl"
                        >
                            <FaWhatsappSquare className="text-[#25D366]" />
                            <p className="ml-2">WhatsApp</p>
                        </a>
                        <a
                            href="https://github.com/KJoaquinklein"
                            target="_blanck"
                            className="mx-5 mb-5 flex items-center min-h-[32px] min-w-[81px]  px-3 py-2 border-2 border-blue-0 hover:border-orange-0 duration-300 text-2xl"
                        >
                            <FaGithubSquare className="text-white-0" />
                            <p className="ml-2">GitHub</p>
                        </a>
                        <a
                            href="src\components\CVJoaquinKlein.pdf"
                            download="CV-Joaquin-Klein"
                            className="mx-5 mb-5 flex items-center min-h-[32px] min-w-[81px]  px-3 py-2 border-2 border-blue-0 hover:border-orange-0 duration-300 text-2xl"
                        >
                            <FaFileDownload className="text-[#F0DB4F]" />
                            <p className="ml-2">Descargar CV</p>
                        </a>
                        <p className="mx-5 mb-5 flex items-center min-h-[32px] min-w-[81px]  px-3 py-2 border-2 border-blue-0 hover:border-orange-0 duration-300 text-2xl">
                            <MdEmail className="text-red-400" />
                            <p className="ml-2">joaquinfsd@hotmail.com</p>
                        </p>
                        {/* <a
                            href="https://www.linkedin.com/in/joaqu%C3%ADn-klein-404b47304/"
                            className="relative inline-flex overflow-hidden p-[2px] mx-4 mb-4 min-w-[232px]"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                            <span className="inline-flex min-h-[70px] min-w-[229px] cursor-pointer items-center  px-4 py-1 text-2xl font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                                <FaLinkedin className="text-[#0A66C2]" />
                                <p className="ml-2">LinkedIn</p>
                            </span>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=5493533498996"
                            className="relative inline-flex  overflow-hidden p-[2px] mx-4 mb-4 min-w-[232px]"
                            target="_blanck"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                            <span className="inline-flex min-h-[70px] min-w-[229px] cursor-pointer items-center  px-4 py-1 text-2xl font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                                <FaWhatsappSquare className="text-[#25D366]" />
                                <p className="ml-2">WhatsApp</p>
                            </span>
                        </a>
                        <a
                            href="https://github.com/KJoaquinklein"
                            className="relative inline-flex overflow-hidden p-[2px] mx-4 mb-4 min-w-[232px]"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                            <span className="inline-flex min-h-[70px] min-w-[229px] cursor-pointer items-center  px-4 py-1 text-2xl font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                                <FaGithubSquare className="text-white-0" />
                                <p className="ml-2">GitHub</p>
                            </span>
                        </a>
                        <a
                            href="src\components\CVJoaquinKlein.pdf"
                            download="CV-Joaquin-Klein"
                            className="relative inline-flex overflow-hidden p-[2px] mx-4 mb-4 min-w-[232px]"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                            <span className="inline-flex min-h-[70px] min-w-[229px] cursor-pointer items-center  px-4 py-1 text-2xl font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                                <FaFileDownload className="text-[#F0DB4F]" />
                                <p className="ml-2">Descargar CV</p>
                            </span>
                        </a>
                        <p
                            href="#contact"
                            className="relative inline-flex mv:min-w-401 sm:min-w-[494px] min-h-[72px] overflow-hidden p-[2px] mx-4 mb-4"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                            <span className="inline-flex min-h-[70px] mv:min-w-400 sm:min-w-[493px] cursor-pointer items-center  px-4 py-1 text-2xl font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                                <MdEmail className="text-red-400" />
                                <p className="ml-2">joaquinfsd@hotmail.com</p>
                            </span>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
