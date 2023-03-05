import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>

            <ul className='list-group list-unstyled'>
                <li className='mt-2'>
                    <NavLink className="list-group-item" to='/dashboard/admin/category'>
                        Create Category
                    </NavLink>
                    <NavLink className="list-group-item" to='/dashboard/admin/product'>
                        Create Product
                    </NavLink>

                    <NavLink className="list-group-item" to="/dashboard/admin/products">
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminMenu;