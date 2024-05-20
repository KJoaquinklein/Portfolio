import { useState } from "react";
import openbook from "src/assets/OpenBook home.jpg";
import country from "src/assets/Country home.jpg";

const Proyects = () => {
    const [showMorOpenBook, setShowMorOpenBook] = useState(false);
    const handleShowMorOpenBook = () => {
        setShowMorOpenBook(!showMorOpenBook);
    };

    const [showMorCountry, setShowMorCountry] = useState(false);
    const handleShowMorCountry = () => {
        setShowMorCountry(!showMorCountry);
    };

    return (
        <div id="proyect" className="bg-black-0 mv:pb-5 md:pb-40 max-w-screen font-port flex justify-center">
            <div className="pt-5 mv:w-screen sm:w-2/3 flex flex-col">
                <h2 className="text-white-0 text-3xl mb-10 mv:pl-4 sm:pl-0">Proyectos</h2>
                <div className="flex justify-center flex-wrap mv:space-y-6 xl:space-y-0">
                    {/* OPEN BOOK */}
                    <div className="relative inline-flex overflow-hidden p-[2px] min-h-[402px] mv:min-w-[390px] sm:min-w-[426px] mx-5">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                        <span className="inline-flex min-h-[400px] min-w-[423px] items-center justify-center text-lg font-port font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                            <div className="text-white-0 min-h-[400px] min-w-[420px] flex flex-col items-center justify-between bg-black-0 px-4 pt-4 pb-3">
                                <div className="flex flex-col items-start">
                                    <img
                                        className={
                                            showMorOpenBook
                                                ? "mv:w-[345px] sm:w-96 h-36 object-cover object-top"
                                                : "mv:w-[345px] sm:w-96 mv:h-48 sm:h-52"
                                        }
                                        src={openbook}
                                        alt="OpenBook"
                                    />
                                    <p className="mt-2 text-orange-0">OpenBook Library</p>
                                    <div>
                                        {showMorOpenBook ? (
                                            <div>
                                                <p className="text-wrap w-96 mv:pr-6 sm:pr-0 text-sm">
                                                    Ecommerce para la venta de libros en el que participe como
                                                    desarrollador FrontEnd, utilizando tecnologías como React.js, Redux
                                                    y Tailwind css. También desarrolle el chat en vivo llamado "OpenBook
                                                    Community", donde aporte al BackEnd con Socket.io.
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorOpenBook}
                                                >
                                                    Ver menos
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-wrap w-96 mv:pr-4 sm:pr-0 text-sm">
                                                    Ecommerce para la venta de libros en el que participe como
                                                    desarrollador FrontEnd ...
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorOpenBook}
                                                >
                                                    Ver más
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end w-full mv:pr-10 sm:pr-0 space-x-6 mt-5 text-white-0">
                                    <a
                                        href="https://test-deploy--openbookstore.netlify.app/"
                                        target="_blank"
                                        className="hover:text-blue-0 duration-300"
                                    >
                                        Deploy
                                    </a>
                                    <a
                                        href="https://github.com/openbookpf"
                                        target="_blank"
                                        className="hover:text-blue-0 duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>

                    {/* COUNTRY APP */}
                    <div className="relative inline-flex overflow-hidden p-[2px] min-h-[402px] mv:min-w-[390px] sm:min-w-[426px] mx-5">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                        <span className="inline-flex min-h-[400px] min-w-[423px] items-center justify-center text-lg font-port font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                            <div className="text-white-0 min-h-[400px] min-w-[420px] flex flex-col items-center justify-between bg-black-0 px-4 pt-4 pb-3">
                                <div className="flex flex-col items-start">
                                    <img
                                        className={
                                            showMorCountry
                                                ? "mv:w-[345px] sm:w-96 h-36 object-cover object-top"
                                                : "mv:w-[345px] sm:w-96 mv:h-48 sm:h-52"
                                        }
                                        src={country}
                                        alt="OpenBook"
                                    />
                                    <p className="mt-2 text-orange-0">Country App</p>
                                    <div>
                                        {showMorCountry ? (
                                            <div>
                                                <p className="text-wrap w-96 mv:pr-6 sm:pr-0 text-sm">
                                                    Aplicación donde podemos ver información y actividades turísticas de
                                                    cada país, como también crear una actividad turística para uno o mas
                                                    paises. También podemos filtrar, ordenar los paises o buscarlo por
                                                    su nombre.
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorCountry}
                                                >
                                                    Ver menos
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-wrap w-96 mv:pr-4 sm:pr-0 text-sm">
                                                    Aplicación donde podemos ver información y actividades turísticas de
                                                    cada país ...
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorCountry}
                                                >
                                                    Ver más
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end w-full mv:pr-10 sm:pr-0 space-x-6 mt-5 text-white-0">
                                    <a
                                        href="https://github.com/KJoaquinklein/PI-countries-Joaquin-Klein"
                                        target="_blank"
                                        className="hover:text-blue-0 duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>

                    {/* <div className="relative inline-flex overflow-hidden p-[2px] min-h-[402px] min-w-[426px] mx-5">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C1625E_0%,#008DA1_50%,#C1625E_100%)]" />
                        <span className="inline-flex min-h-[400px] min-w-[423px] items-center justify-center text-lg font-port font-medium bg-black-0 duration-300 text-white backdrop-blur-3xl">
                            <div className="text-white-0 min-h-[400px] min-w-[420px] flex flex-col items-center justify-between bg-black-0 px-4 pt-4 pb-3">
                                <div className="flex flex-col items-start">
                                    <img
                                        className={showMorCountry ? "w-96 h-36 object-cover object-top" : "w-96 h-52"}
                                        src="src\assets\Country home.jpg"
                                        alt="OpenBook"
                                    />
                                    <p className="mt-2 text-orange-0">Country App</p>
                                    <div>
                                        {showMorCountry ? (
                                            <div>
                                                <p className="text-wrap w-96 text-sm">
                                                    Aplicación donde podemos ver información y actividades turísticas de
                                                    cada país, como también crear una actividad turística para uno o mas
                                                    paises. También podemos filtrar, ordenar los paises o buscarlo por
                                                    su nombre.
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorCountry}
                                                >
                                                    Ver menos
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-wrap w-96 text-sm">
                                                    Aplicación donde podemos ver información y actividades turísticas de
                                                    cada país ...
                                                </p>
                                                <button
                                                    className="underline hover:text-orange-0 duration-300 text-sm"
                                                    onClick={handleShowMorCountry}
                                                >
                                                    Ver más
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end w-full space-x-6 mt-5 text-white-0">
                                    <a
                                        href="https://github.com/KJoaquinklein/PI-countries-Joaquin-Klein"
                                        target="_blank"
                                        className="hover:text-blue-0 duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Proyects;
