import React from 'react';
import { Link } from 'react-router-dom';

const AdminArea = () => {
    return (
        <div className='py-96'>
            <Link to='/admin/managebookings'>MANAGE BOOKING</Link><br />
            <Link to='/managedestinations'>MANAGE DISTINATION</Link><br />
            <Link to='/managepackages'>MANAGE PACKAGES </Link>
        </div>
    );
};

export default AdminArea;