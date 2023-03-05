import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    return (
        <div>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>User link</div>
            <ul className='list-group list-unstyled'>
                <li className='mt-2'>
                    <NavLink className="list-group-item" to='/dashboard/user/profile'>
                        Create Profile
                    </NavLink>
                    <NavLink className="list-group-item" to='/dashboard/user/orders'>
                        Create Orders
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;