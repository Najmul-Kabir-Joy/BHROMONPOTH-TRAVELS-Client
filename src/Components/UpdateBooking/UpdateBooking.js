import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const UpdateBooking = () => {
    const { id } = useParams();
    const { reset } = useForm();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/bookinglist/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    const history = useHistory();
    // const redirectUrl = location.state;
    const nameupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.name = e.target.value;
        setItem(updatedProduct);
    };
    const emailupdate = e => {
        const updated = { ...item };
        updated.email = e.target.value;
        setItem(updated);
    };
    const phoneupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.phone = e.target.value;
        setItem(updatedProduct);
    };
    const peopleupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.people = e.target.value;
        setItem(updatedProduct);
    };
    const dateupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.date = e.target.value;
        setItem(updatedProduct);
    };
    const tfromupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.travelingfrom = e.target.value;
        setItem(updatedProduct);
    };
    const ttoupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.travelingto = e.target.value;
        setItem(updatedProduct);
    };
    const vacupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.vaccine = e.target.value;
        setItem(updatedProduct);
    };
    const packupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.packName = e.target.value;
        setItem(updatedProduct);
    };
    const hotelupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.bookhotel = e.target.checked;
        setItem(updatedProduct);
    };
    const sightupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.sightseeing = e.target.checked;
        setItem(updatedProduct);
    };
    const rticketupdate = e => {
        const updatedProduct = { ...item };
        updatedProduct.returnticket = e.target.checked;
        setItem(updatedProduct);
    };
    const handleUpdate = e => {
        const url = `http://localhost:5000/bookinglist/${id}`
        axios.put(url, item)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast('✅ Details updated successfully', {
                        position: "top-right",
                        autoClose: 1100,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                    // window.setTimeout(() => {
                    //     history.push('/admin/managebookings')
                    // }, 1200)
                }
            });
        e.preventDefault();
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container mx-auto">
                <h1 className="text-3xl py-5">UPDATE BOOKING INFORMATION</h1>
                <form onSubmit={handleUpdate}>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="name">
                                    Your name*
                                </label>
                                <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Your name" onChange={nameupdate} value={item.name || ''} />

                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="email">
                                    Email*
                                </label>
                                <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="email" type="text" placeholder="Your email" onChange={emailupdate} value={item.email || ''} />
                            </div>
                        </div>
                        {/* SECOND ROW */}
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="phone">
                                    Phone*
                                </label>
                                <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="phone" type="tel" placeholder="Your phone number" onChange={phoneupdate} value={item.phone || ''} />

                            </div>
                            <div className="md:w-1/3 px-3">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="persons">
                                    No.of persons*
                                </label>
                                <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="persons" type="number" placeholder="No. of people" onChange={peopleupdate} value={item.people || ''} />
                            </div>
                            <div className="md:w-1/3 px-3">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="date">
                                    Select Date*
                                </label>
                                <input type="date" id="date" name="date" placeholder="date"
                                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" onChange={dateupdate} value={item.date || ''} />
                            </div>
                        </div>
                        {/*THIRD ROW */}
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="pacName">
                                    PACKAGE NAME*
                                </label>
                                <input className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3" id="pacName" type="text" placeholder="Package Name" onChange={packupdate} value={item.packName || ''} />

                            </div>
                        </div>

                        {/* FORTH ROW */}
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tfrom">
                                    Travelling from *
                                </label>
                                <div>
                                    <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="tfrom" onChange={tfromupdate} value={item.travelingfrom || ''}>
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
                                    <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="tto" onChange={ttoupdate} value={item.travelingto || ''}>
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
                                    <select className="w-full bg-green-200 border border-green-500 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="vaccine" onChange={vacupdate} value={item.vaccine || ''}>
                                        <option value='Waiting'>Registerd and waiting</option>
                                        <option value='No'>No</option>
                                        <option value='Yes'>Yes</option>
                                        <option value='Onedone'>Only first dose done</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* FIFTH ROW */}

                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                <label className="inline-flex items-center mt-3">
                                    {
                                        item.bookhotel ?
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" checked onChange={hotelupdate} /><span className="ml-2 text-black">Book hotel?</span></span>
                                            :
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" onChange={hotelupdate} /><span className="ml-2 text-black">Book hotel?</span></span>


                                    }
                                </label>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                <label className="inline-flex items-center mt-3">
                                    {
                                        item.sightseeing ?
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" checked onChange={sightupdate} /><span className="ml-2 text-black">Manage sightseeing?</span></span>
                                            :
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" onChange={sightupdate} /><span className="ml-2 text-black">Manage sightseeing?</span></span>


                                    }
                                </label>

                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 flex">
                                <label className="inline-flex items-center mt-3">
                                    {
                                        item.returnticket ?
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" checked onChange={rticketupdate} /><span className="ml-2 text-black">Return ticket?</span></span>
                                            :
                                            <span><input type="checkbox" className="form-checkbox h-5 w-5 text-black" onChange={rticketupdate} /><span className="ml-2 text-black">Return ticket?</span></span>


                                    }
                                </label>

                            </div>
                        </div>
                        {/* BUTTON */}
                        <div className="-mx-3 md:flex mt-2">
                            <div className="md:w-full px-3">
                                <button className="md:w-full bg-green-400 text-white font-bold py-2 px-4 shadow-lg hover:bg-green-700 border-green-500 hover:border-green-500 rounded-full">
                                    UPDATE BOOKING
                                </button>
                            </div>
                        </div>
                        <p className='text-black'>After confirming booking our support will contact with you</p>
                        <Link to='/' className='text-green-500 mt-5'>BACK TO HOMEPAGE</Link>
                    </div>
                </form >
            </div >
        </div >
    );
};

export default UpdateBooking;