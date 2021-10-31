import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://ghastly-nightmare-99427.herokuapp.com/packagelist', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast('✅ Added successfully', {
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
        <div className='pt-8'>
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
            <div className=" px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center ">
                <div className=" relative mx-auto max-w-6xl py-20 px-2 lg:px-24 shadow-xl mb-24">
                    <div>
                        <h1
                            className="text-3xl mb-5 font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200"
                        >
                            BhromonPoth
                        </h1>
                        <h1 className='text-2xl'>ADD NEW PACKAGE</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="name">
                                        package name*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Package name" {...register("countryname", { required: true })} />

                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="money">
                                        money*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="money" type="number" placeholder="Money" {...register("money", { required: true })} />
                                </div>
                            </div>
                            {/*ROW 2*/}
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="days">
                                        DAYS and NIGHTS*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="days" type="text" placeholder="Days and nights" {...register("days", { required: true })} />

                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="persons">
                                        persons*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="persons" type="number" placeholder="Max Persons" {...register("persons", { required: true })} />
                                </div>
                            </div>
                            {/*ROW 3*/}
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="places">
                                        PLACES*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="places" type="number" placeholder="How many places" {...register("places", { required: true })} />

                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="img">
                                        package image*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="img" type="link" placeholder="Package img" {...register("imgsrc", { required: true })} />

                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="popular">
                                        popular*
                                    </label>
                                    <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="popular" type="text" placeholder="Popular" {...register("popular", { required: true })} />

                                </div>
                            </div>

                            {/* BUTTON */}
                            <div className="-mx-3 md:flex mt-2">
                                <div className="md:w-full px-3">
                                    <button className="md:w-full bg-green-400 text-white font-bold py-2 px-4 shadow-lg hover:bg-green-700 border-green-500 hover:border-green-500 rounded-full">
                                        ADD NEW PACKAGE
                                    </button>
                                </div>
                            </div>
                            <p className='text-red-500'>MAKE SURE ALL INPUTS ARE OKAY</p>
                            <Link to='/' className='text-green-500 mt-5'>SEE PACKAGE LIST</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddNewPackage;