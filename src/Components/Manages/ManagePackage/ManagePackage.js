import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import MpacRow from './MpacRow/MpacRow';

const ManagePackage = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-nightmare-99427.herokuapp.com/packagelist')
            .then(res => res.json())
            .then(data => setList(data.packages))
    }, [])
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `https://ghastly-nightmare-99427.herokuapp.com/packagelist/${id}`;
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
                    <h1 className='3xl border-b-2 border-green-400 inline'>MANAGE PACKAGES</h1>
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
                                                <th className="px-4 py-3 border">NAME</th>
                                                <th className="px-4 py-3 border">AMOUNT</th>
                                                <th className="px-4 py-3 border">DAYS</th>
                                                <th className="px-4 py-3 border">PERSONS</th>
                                                <th className="px-4 py-3 border">PLACES</th>
                                                <th className="px-4 py-3 border">POPULAR</th>
                                                <th className="px-4 py-3 border">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                list.map((item, index) => <MpacRow key={item._id} item={item} handleDelete={handleDelete} index={index + 1}></MpacRow>)
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

export default ManagePackage;