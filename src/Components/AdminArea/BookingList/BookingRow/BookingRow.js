import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const BookingRow = (props) => {
    const { user } = useAuth();
    const {
        _id,
        name, email, phone,
        people, date,
        travelingto, travelingfrom,
        vaccine, bookhotel, sightseeing,
        returnticket, packName } = props.item
    const { index } = props;
    const { handleDelete } = props;
    return (
        <tr className="text-black  border-b border-green-600">
            <td className="border-l border-r  font-semibold border-green-600">
                {index}
            </td>
            <td className="py-2 text-sm border-r border-green-600">{name}</td>
            <td className="py-2 text-xs border-r border-green-600">{email}</td>
            <td className="py-2 text-sm border-r border-green-600">{phone}</td>
            <td className="py-2 text-sm border-r border-green-600">{people}</td>
            <td className="py-2 text-sm border-r border-green-600">{date}</td>

            {
                user.email === 'admin@bhptmail.com' ?
                    <td className="py-2 text-sm border-r border-green-600 uppercase">
                        <p>{travelingfrom} -&gt; {travelingto}</p>
                        <p className='text-red-500'>PAC-{packName}</p>
                    </td>
                    :
                    <>
                        <td className="py-2 text-sm border-r border-green-600 uppercase">
                            {travelingfrom} -&gt; {travelingto}
                        </td>
                        <td className="py-2 text-sm border-r border-green-600 uppercase">
                            {packName}
                        </td>
                    </>


            }
            <td className="py-2 text-sm border-r border-green-600">{vaccine}</td>
            <td className="py-2 text-sm border-r border-green-600">{bookhotel ? <i className="fas fa-check-circle text-green-500"></i> : <i className="fas fa-times text-red-500"></i>}</td>
            <td className="py-2 text-sm border-r border-green-600">{sightseeing ? <i className="fas fa-check-circle text-green-500"></i> : <i className="fas fa-times text-red-500"></i>}</td>
            <td className="py-2 text-sm border-r border-green-600">{returnticket ? <i className="fas fa-check-circle text-green-500"></i> : <i className="fas fa-times text-red-500"></i>}</td>
            {
                user.email === 'admin@bhptmail.com' &&
                <td className="py-2 text-sm border-r border-green-600">
                    <Link to={`/bookinglist/${_id}`}><button className='bg-transparent mr-3 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded'><i className="fas fa-edit"></i></button></Link>
                    <button onClick={() => handleDelete(_id)} className='bg-transparent mr-3  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
                </td>

            }
        </tr>

    );
};

export default BookingRow;