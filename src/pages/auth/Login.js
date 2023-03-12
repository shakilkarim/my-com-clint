import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './Login.css';
const Login = () => {
    //Login State
        const [email,setEmail] = useState('shakil1997@gmail.com');
        const [password,setPassword] = useState('Shakil1997');

        //Hooks 
        const [auth, setAuth] = useAuth();
         const navigate = useNavigate();
         const location = useLocation();
        //Login function and data pass database

        const handleSubmit = async (e) => {
             //loading system off function 
             e.preventDefault();
            try{
                const {data} = await axios.post(
                    `/login`,
                    {
                        email,
                        password
                    }
                );

                console.log(data);
                
                if(data?.error){
                    toast.error(data.error);
                }else{
                    localStorage.setItem('auth', JSON.stringify(data));
                    setAuth({ ...auth, token: data.token, user: data.user });
                    toast.success('Login success');
                    navigate(location.state || "/dashboard");
                }
            }catch(err){
                console.log(err);
                toast.error("Login failed. Try again.");
            }
        }
    return (
        <div>
            {/* <Jumboton title='Login Page'></Jumboton> */}
           

            <div className="Auth-form-container">
                <form onSubmit={handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        value={email}
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                    
                    </div>
                </form>
            </div>
        </div>


        

    )
    
};

export default Login;