import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BookingRow from './BookingRow/BookingRow';
const BookingList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookinglist')
            .then(res => res.json())
            .then(data => {
                setItems(data.bookings)
            })
    }, []);
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `http://localhost:5000/bookinglist/${id}`;
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        toast('✅ Product deleted successfully', {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        const remains = items.filter(item => item._id !== id);
                        setItems(remains);
                    }
                })
        }
    }

    return (
        <div className=''>
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
            <h1 className='text-3xl inline border-b-2 border-green-400 uppercase'>manage bookings </h1>
            <section className="p-6">
                <div className="w-full mb-8 overflow-hidden pb-64">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="text-md font-semibold bg-green-300 text-center tracking-wide text-gray-900 uppercase border-b border-green-600">
                                    <th className="px-4 py-3 border">Sl.</th>
                                    <th className="px-4 py-3 border">NAME</th>
                                    <th className="px-4 py-3 border">EMAIL</th>
                                    <th className="px-4 py-3 border">PHONE</th>
                                    <th className="px-4 py-3 border"><i className="fas fa-users"></i></th>
                                    <th className="px-4 py-3 border">DATE</th>
                                    <th className="px-4 py-3 border">FROM-&gt;TO</th>
                                    <th className="px-4 py-3 border">VACCINE</th>
                                    <th className="px-4 py-3 border"><i className="fas fa-hotel"></i></th>
                                    <th className="px-4 py-3 border"><i className="fas fa-eye"></i></th>
                                    <th className="px-4 py-3 border"><i className="fas fa-plane-arrival"></i></th>
                                    <th className="px-4 py-3 border">ACTION</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    items.map((item, index) => <BookingRow key={item._id} item={item} handleDelete={handleDelete} index={index + 1}></BookingRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BookingList;