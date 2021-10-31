import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import BookingRow from '../AdminArea/BookingList/BookingRow/BookingRow';
import MyBookingsRow from './MyBookingsRow/MyBookingsRow';

const MyBookings = () => {
    const [items, setItems] = useState([]);
    const id = useParams();
    useEffect(() => {
        fetch(`https://ghastly-nightmare-99427.herokuapp.com/mybookings/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, []);
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `https://ghastly-nightmare-99427.herokuapp.com/bookinglist/${id}`;
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        toast('✅ Order deleted successfully', {
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
        <div className='pb-96'>
            {
                items.length > 0 ?
                    < div className=''>
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
                        <h1 className='text-3xl inline border-b-2 border-green-400 uppercase'>my bookings </h1>
                        <section className="p-6">
                            <div className="w-full mb-8 overflow-hidden pb-64">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="text-md font-semibold bg-green-300 text-center tracking-wide text-gray-900 uppercase border-b border-green-600">
                                                <th className="px-4 py-3 border">NAME</th>
                                                <th className="px-4 py-3 border">EMAIL</th>
                                                <th className="px-4 py-3 border">PHONE</th>
                                                <th className="px-4 py-3 border"><i className="fas fa-users"></i></th>
                                                <th className="px-4 py-3 border">DATE</th>
                                                <th className="px-4 py-3 border">FROM-&gt;TO</th>

                                                <th className="px-4 py-3 border">PACKAGE</th>

                                                <th className="px-4 py-3 border">VACCINE</th>
                                                <th className="px-4 py-3 border"><i className="fas fa-hotel"></i></th>
                                                <th className="px-4 py-3 border"><i className="fas fa-eye"></i></th>
                                                <th className="px-4 py-3 border"><i className="fas fa-plane-arrival"></i></th>
                                                <th className="px-4 py-3 border">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                items.map(item => <MyBookingsRow key={item._id} item={item} handleDelete={handleDelete}></MyBookingsRow>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                    :
                    <p className='text-3xl pt-10'>YOU HAVE NO ORDERS</p>
            }
        </div >
    );
};

export default MyBookings;