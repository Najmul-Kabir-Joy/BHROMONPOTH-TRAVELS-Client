import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import MentorsRow from './MentorsRow/MentorsRow';

const ManageMentors = () => {
    const [list, setList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/mentors')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `http://localhost:5000/mentors/${id}`;
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
                        const remains = list.filter(item => item._id !== id);
                        setList(remains);
                    }
                })
        }
    }

    const handleApprove = (id) => {
        const approve = window.confirm('You really want to add him as mentor?');
        if (approve) {
            const url = `http://localhost:5000/mentors/${id}`;
            const data = { status: 'ACTIVE' };
            axios.put(url, data)
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
                        window.setTimeout(() => {
                            history.push('/managementors')
                        }, 1200)
                    }
                });
        }
    }
    return (
        <div className='pb-96'>
            {
                list.length > 0 ?
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
                        <h1 className='text-3xl inline border-b-2 border-green-400 uppercase'>manage mentors </h1>
                        <section className="p-6 container mx-auto">
                            <div className="w-full mb-8 overflow-hidden pb-64">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="text-md font-semibold bg-green-300 text-center tracking-wide text-gray-900 uppercase border-b border-green-600">
                                                <th className="px-4 py-3 border">Sl.</th>
                                                <th className="px-4 py-3 border">NAME</th>
                                                <th className="px-4 py-3 border">EMAIL</th>
                                                <th className="px-4 py-3 border">DESCRIPTION</th>
                                                <th className="px-4 py-3 border">JOB</th>
                                                <th className="px-4 py-3 border">LOCATION</th>
                                                <th className="px-4 py-3 border">STATUS</th>
                                                <th className="px-4 py-3 border">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                list.map((item, index) => <MentorsRow key={item._id} item={item} index={index + 1} handleApprove={handleApprove} handleDelete={handleDelete}></MentorsRow>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                    :
                    <p className='text-3xl pt-10'>NO MENTORS</p>
            }
        </div >
    );
};

export default ManageMentors;