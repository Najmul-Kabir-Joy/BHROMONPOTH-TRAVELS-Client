import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navigationbar.css';

const Navigationbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { user, logOut } = useAuth();
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
                                    to="/home"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/allpackages"
                                >
                                    PACKAGES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/alldestinations"
                                >
                                    DESTINATIONS
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/allphotos"
                                >
                                    GALLARY
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/mentors"
                                >
                                    MENTORS
                                </Link>
                            </li>
                            {
                                user.email === 'najmul15-11321@diu.edu.bd' ?
                                    <li className="nav-item dropdown inline-block relative">
                                        <span className='px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75'>CONTROLS</span>
                                        <ul class="dropdown-menu z-50 absolute hidden text-gray-700 pt-1">
                                            <li class=""><Link to='/addnewdestination' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-10 block whitespace-no-wrap">ADD DESTINATION</Link></li>
                                            <li class=""><Link to='/addnewpackage' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-10 block whitespace-no-wrap">ADD PACKAGE</Link></li>
                                            <li class=""><Link to='/bookinglist' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-10 block whitespace-no-wrap">BOOKINGS</Link></li>
                                            <li class=""><Link to='/addphoto' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-10 block whitespace-no-wrap">ADD PHOTO</Link></li>
                                        </ul>
                                    </li>
                                    :
                                    ''
                            }
                            {
                                user.email ?
                                    <li className="nav-item dropdown inline-block relative">

                                        <div class="w-10 h-10 ml-2 overflow-hidden border-2 border-white rounded-full cursor-pointer" onClick={logOut}>
                                            <img src={user.photoURL} class="object-cover w-full h-full" alt="avatar" />
                                        </div>
                                        <ul class="dropdown-menu z-50 absolute hidden text-gray-700 pt-1">
                                            <li class=""><Link to='/alldestinations' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-5 block whitespace-no-wrap">PROFILE</Link></li>
                                            <li class=""><Link to='/managementors' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-5 block whitespace-no-wrap">PROFILE</Link></li>
                                            <li class=""><Link to={`/mybookings/${user.uid}`} class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-5 block whitespace-no-wrap">MY BOOKINGS</Link></li>
                                            <li class=""><Link to='/bookinglist
                                            ' class="rounded-t bg-green-400 hover:bg-green-600 text-white py-2 px-5 block whitespace-no-wrap">ALL BOOKINGS</Link></li>
                                            <li class="" onClick={logOut} ><span class="rounded-t cursor-pointer bg-green-400 hover:bg-green-600 text-white py-2 px-5 block whitespace-no-wrap">LOGOUT</span></li>

                                        </ul>

                                        {/* </button> */}
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link
                                            className="px-3 py-2 flex bg-white text-green-400 rounded-xl items-center text-md uppercase font-bold leading-snug   hover:opacity-75"
                                            to="/userlogin"
                                        >
                                            LOGIN
                                        </Link>

                                    </li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>




        </>

    );
};

export default Navigationbar;