import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import MdesRow from './MdesRow/MdesRow';

const ManageDestination = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinationlist')
            .then(res => res.json())
            .then(data => setList(data.destinatons))
    }, [])
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `http://localhost:5000/destinationlist/${id}`;
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
                        const remains = list.filter(item => item._id !== id);
                        setList(remains);
                    }
                })
        }
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
                <div className='text-center'>
                    <h1 className='3xl border-b-2 border-green-400 inline'>MANAGE DESTINATION</h1>
                </div>
                <section className="p-6">
                    <div className="w-full mb-8 overflow-hidden pb-64">
                        <div className="w-full overflow-x-auto">
                            {
                                list.length ?
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="text-md font-semibold bg-green-300 text-center tracking-wide text-gray-900 uppercase border-b border-green-600">
                                                <th className="px-4 py-3 border">Sl.</th>
                                                <th className="px-4 py-3 border">COUNTRY NAME</th>
                                                <th className="px-4 py-3 border">SHORT TITLE</th>
                                                <th className="px-4 py-3 border">BANNER IMAGE</th>
                                                <th className="px-4 py-3 border">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                list.map((item, index) => <MdesRow key={item._id} item={item} handleDelete={handleDelete} index={index + 1}></MdesRow>)
                                            }
                                        </tbody>

                                    </table>
                                    :
                                    <div class="flex justify-center items-center py-20 mx-auto">
                                        <div
                                            class="
                                    animate-spin
                                    rounded-full
                                    h-32
                                    w-32
                                    border-t-2 border-b-2 border-green-500
                                "
                                        >

                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ManageDestination;