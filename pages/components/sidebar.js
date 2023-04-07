import { useState } from "react";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className=" text-4xl text-white items-center cursor-pointer fixed right-10 top-3 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-black"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-black"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-black"></span>

                </button>


            ) : (


                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    id="navbarToggler" className="
            absolute right-2 top-6 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden
                ">
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                </button>
            )}

            <div
                className={`top-0 right-0 w-full bg-purple-200  p-10 pl-20 text-white fixed h-[350px] ease-in duration-300 ${showSidebar ? "-translate-y-0 " : "-translate-y-full"
                    }`}
            >
                <ul

                    className="block lg:flex">
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#home" className="
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0
  ">
                            Home
                        </a>
                    </li>

                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#clients" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            Clients
                        </a>
                    </li>
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#services" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            Services
                        </a>
                    </li>
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#work" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            Work
                        </a>
                    </li>
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#testimonials" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            Reviews
                        </a>
                    </li>
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#about" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            About
                        </a>
                    </li>
                    <li
                        whileHover={{ scale: 1.1 }}
                        className="relative group">
                        <a href="#contact" className="
    ud-menu-scroll
    text-base text-dark
    lg:text-white
    lg:group-hover:opacity-70
    lg:group-hover:text-white
    group-hover:text-primary
    py-2
    lg:py-6 lg:inline-flex lg:px-0
    flex
    mx-8
    lg:mr-0 lg:ml-7
    xl:ml-12
  ">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;