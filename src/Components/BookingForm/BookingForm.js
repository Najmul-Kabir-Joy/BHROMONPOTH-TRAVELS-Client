import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/bookinglist', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast('✅ Booking taken, we will contact you soon', {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                }
            })
    };
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="relative text-white bg-center xl:py-20 lg:py-24 bg-no-repeat bg-cover" role="banner" style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp4069431.jpg)" }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className=" px-4 py-10 md:py-10  mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center ">
                    <div className="relative mx-auto max-w-6xl py-10 px-2 lg:px-24 shadow-xl mb-24">
                        <div>
                            <h1
                                className="text-3xl mb-5 font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200"
                            >
                                BhromonPoth
                            </h1>
                            <h1 className='text-2xl'>BOOK YOUR JOURNEY WITH US</h1>
                            <small className='mb-5'>FILL UP THE FORM QUICKLY</small>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
                                <div className="-mx-3 md:flex mb-6">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="name">
                                            Your name*
                                        </label>
                                        <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Your name" {...register("name", { required: true })} />

                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="email">
                                            Email*
                                        </label>
                                        <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="email" type="text" placeholder="Your email" {...register("email", { required: true })} />
                                    </div>
                                </div>
                                {/* SECOND ROW */}
                                <div className="-mx-3 md:flex mb-6">
                                    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="phone">
                                            Phone*
                                        </label>
                                        <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="phone" type="tel" placeholder="Your phone number" {...register("phone", { required: true })} />

                                    </div>
                                    <div className="md:w-1/3 px-3">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="persons">
                                            No. of persons*
                                        </label>
                                        <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="persons" type="number" placeholder="No. of people" {...register("people", { required: true })} />
                                    </div>
                                    <div className="md:w-1/3 px-3">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="date">
                                            Select Date*
                                        </label>
                                        <input type="date" id="date" name="date" placeholder="date"
                                            className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" {...register("date", { required: true })} />
                                    </div>
                                </div>

                                {/* THIRD ROW */}
                                <div className="-mx-3 md:flex mb-2">
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tfrom">
                                            Travelling from*
                                        </label>
                                        <div>
                                            <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="tfrom" {...register("travelingfrom")}>
                                                <option value='dhaka'>Dhaka</option>
                                                <option value='chittagong'>Chittagong</option>
                                                <option value='rajshahi'>Rajshahi</option>
                                                <option value='sylhet'>Sylet</option>
                                                <option value='dinajpur'>Dinajpur</option>
                                                <option value='rangpur'>Rangpur</option>
                                                <option value='bogura'>Bogura</option>
                                                <option value='khulna'>Khulna</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tto">
                                            Travelling to*
                                        </label>
                                        <div>
                                            <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="tto" {...register("travelingto")}>
                                                <option value='india'>India</option>
                                                <option value='germany'>Germany</option>
                                                <option value='usa'>USA</option>
                                                <option value='uk'>UK</option>
                                                <option value='uae'>UAE</option>
                                                <option value='netherland'>Netherland</option>
                                                <option value='switzerland'>Switzerland</option>
                                                <option value='france'>France</option>
                                                <option value='tokyo'>Tokyo</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="vaccine">
                                            Vaccinated*
                                        </label>
                                        <div>
                                            <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="vaccine" {...register("vaccine", { required: true })}>
                                                <option value='registerd'>Registerd and waiting</option>
                                                <option value='no'>No</option>
                                                <option value='yes'>Yes</option>
                                                <option value='oneDone'>Only first dose done</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* FORTH ROW */}

                                <div className="-mx-3 md:flex mb-6">
                                    <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                        <label className="inline-flex items-center mt-3">
                                            <input type="checkbox" className="form-checkbox h-5 w-5 text-black" {...register("bookhotel")} /><span className="ml-2 text-black">Book hotel?</span>
                                        </label>

                                    </div>
                                    <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                        <label className="inline-flex items-center mt-3">
                                            <input type="checkbox" className="form-checkbox h-5 w-5 text-black" {...register("sightseeing")} /><span className="ml-2 text-black">Manage sightseeing?</span>
                                        </label>

                                    </div>
                                    <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                        <label className="inline-flex items-center mt-3">
                                            <input type="checkbox" className="form-checkbox h-5 w-5 text-black" {...register("returnticket")} /><span className="ml-2 text-black">Return ticket?</span>
                                        </label>

                                    </div>
                                </div>
                                {/* BUTTON */}
                                <div className="-mx-3 md:flex mt-2">
                                    <div className="md:w-full px-3">
                                        <button className="md:w-full bg-green-400 text-white font-bold py-2 px-4 shadow-lg hover:bg-green-700 border-green-500 hover:border-green-500 rounded-full">
                                            CONFIRM BOOKING
                                        </button>
                                    </div>
                                </div>
                                <p className='text-black'>After confirming booking our support will contact with you</p>
                                <Link to='/' className='text-green-500 mt-5'>BACK TO HOMEPAGE</Link>
                            </div>
                        </form>
                    </div>

                </div>

            </section>


        </div>
    );
};

export default BookingForm;