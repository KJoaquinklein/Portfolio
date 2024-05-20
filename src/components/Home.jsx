import { TypewriterEffect } from "./ui/typewriter-effect";

const Home = () => {
    const words = [{ text: "Joaquín" }, { text: "Klein" }];

    return (
        <div className="bg-black-0 h-screen max-w-screen flex mv:items-center lg:items-start mv:flex-col lg:flex-row justify-center mv:pt-10 lg:pt-40">
            <div>
                <img src="src/assets/IMG2.jpg" alt="Retrato de Joaquin Klein" className="w-96 h-96" />
            </div>
            <div className="text-white-0 font-port flex flex-col justify-between h-96 mv:w-96 lg:w-2/4 xl:w-1/3 mv:ml-0 lg:ml-7">
                <div className="flex flex-col">
                    <TypewriterEffect className="text-3xl" words={words} />
                    <p className="text-2xl mt-2 text-blue-0">FrontEnd Developer</p>
                    <p className="mt-7 font-bold">Un poco sobre mi:</p>
                    <p className="text-wrap max-w-1/3 mt-2 text-gray-300">
                        Entusiasta del diseño y desarrollo web con una pasión por la creación de experiencias digitales.
                        Siempre estoy aprendiendo nuevas tecnologías y profundizando en las que ya conozco para mejorar
                        mis habilidades.
                    </p>
                </div>

                <div>
                    <a
                        href="#proyect"
                        className="relative inline-flex min-h-[32px] min-w-[81px] overflow-hidden p-[2px]"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                        <span className="inline-flex  cursor-pointer items-center justify-center px-3 py-2 text-lg font-port font-medium bg-black-0 duration-300 hover:bg-opacity-0 text-white backdrop-blur-3xl">
                            Proyectos
                        </span>
                    </a>
                    <a
                        href="#technologies"
                        className="mv:mx-2 lg:mx-6 relative inline-flex min-h-[32px] min-w-[81px] overflow-hidden p-[2px] "
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#008DA1_0%,#C1625E_50%,#008DA1_100%)]" />
                        <span className="inline-flex  cursor-pointer items-center justify-center px-3 py-2 text-lg font-medium bg-black-0 duration-300 hover:bg-opacity-0 text-white backdrop-blur-3xl">
                            Tecnologías
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="relative inline-flex min-h-[32px] min-w-[81px] overflow-hidden p-[2px] "
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                        <span className="inline-flex  cursor-pointer items-center justify-center px-3 py-2 text-lg font-medium bg-black-0 duration-300 hover:bg-opacity-0 text-white backdrop-blur-3xl">
                            Contacto
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
