import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import logo from '../../images/Logo.svg';
import './Nav.css';
const Menu = () => {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
     
     <div>
      
     <ul className="nav navbar d-flex justify-content-end shadow-sm mb-2">
       <img src={logo} alt="" /> 
        <li className="nav-item">
          <NavLink className="nav-link nav" aria-current="page" to="/">
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link nav"
            aria-current="page"
            to="/dashboard/secret"
          >
            SECRET
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link nav" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav" to="/register">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <Dropdown className='nav'>
          <Dropdown.Toggle variant="" className='nav' id="dropdown-basic">
            {auth?.user?.name}
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
            <NavLink
              
              to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                }`}>
               Dashboard 
            </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
            <a href='/#' onClick={logout} className="nav-link">
                    Logout
            </a>
            </Dropdown.Item>
            
          </Dropdown.Menu>
          </Dropdown>
          // <div className="dropdown">
           
          //   <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          //         {/* {auth?.user?.name} */}
          //     </a>

          //     <ul className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
          //       <li className="dropdown-item">
          //         <NavLink
                    
          //           to={`/dashboard/${auth?.user?.role === 1 ? "nadmi" : "user"
          //             }`}
          //         >
          //          Dashboard 
          //         </NavLink>
          //         Dashboard
          //       </li>

          //       <li className="nav-item pointer">
          //         <a onClick={logout} className="nav-link">
          //           Logout
          //         </a>
          //       </li>
          //     </ul>
            
          // </div>
         
        )}
      </ul>
     </div>
  
    </>

  );
};

export default Menu;
