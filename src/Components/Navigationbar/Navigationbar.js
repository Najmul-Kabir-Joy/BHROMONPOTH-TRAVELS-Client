import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);


    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-400 mb-0">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-75"
                            to=""
                        >
                            BhromonPoth
                            <i className="fas fa-plane ml-3 "></i>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {
                                !navbarOpen ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>
                            }
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="#pablo"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to=""
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navigationbar;