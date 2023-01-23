import React from 'react';
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <ul className='nav d-flex justify-content-between' style={{marginBottom:'12px'}}>
                <li className="nav-link">
                    <NavLink className="nav-link" aria-current='page' to='/'>
                        Home
                    </NavLink>
                </li>
                <li className="nav-link">
                     <NavLink className="nav-link" aria-current='page' to='/login'>
                        Login
                     </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink className="nav-link" aria-current='page' to='/register'>
                        Register
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;