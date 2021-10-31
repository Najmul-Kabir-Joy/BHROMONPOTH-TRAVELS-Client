import React from 'react';
import { Link } from 'react-router-dom';

const MdesRow = (props) => {
    const { item, handleDelete, index } = props;
    const { _id, countryname, shorttitle, bannerimg } = item;
    return (
        <tr className="text-black  border-b border-green-600">
            <td className="border-l border-r  font-semibold border-green-600">
                {index}
            </td>
            <td className="py-2 text-sm border-r border-green-600">{countryname}</td>
            <td className="py-2 text-xs border-r border-green-600">{shorttitle}</td>
            <td className="py-2 text-xs border-r border-green-600"><img src={bannerimg} className='h-20 w-20' alt="" /></td>
            <td className="py-2 text-sm border-r border-green-600">
                <button onClick={() => handleDelete(_id)} className='bg-transparent mr-3  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
            </td>

        </tr>
    );
};

export default MdesRow;