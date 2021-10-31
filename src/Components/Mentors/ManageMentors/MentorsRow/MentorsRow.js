import React from 'react';
import { Link } from 'react-router-dom';

const MentorsRow = (props) => {
    const { _id, name, des, photo, job, location, email, status } = props.item;
    const { handleDelete } = props;
    const { handleApprove } = props
    const { index } = props;
    return (
        <tr className="text-black  border-b border-green-600">
            <td className="border-l border-r  font-semibold border-green-600">{index}</td>
            <td className="py-2 text-xs border-r border-green-600">{name}</td>
            <td className="py-2 text-sm border-r border-green-600">{email}</td>
            <td className="py-2 text-sm border-r border-green-600">{des}</td>
            <td className="py-2 text-sm border-r border-green-600">{job}</td>
            <td className="py-2 text-sm border-r border-green-600">{location}</td>
            {
                status === 'pending' ?
                    <td className="py-2 text-sm border-r uppercase font-bold border-green-600 text-yellow-500">{status}</td>
                    :
                    <td className="py-2 text-sm border-r uppercase font-bold border-green-600 text-green-500">{status}</td>
            }

            <td className="py-2 text-sm border-r border-green-600">
                <button onClick={() => handleApprove(_id)} className='bg-transparent mr-3 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded'><i class="fas fa-check"></i></button>
                <button onClick={() => handleDelete(_id)} className='bg-transparent mr-3  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
            </td>

        </tr>
    );
};

export default MentorsRow;