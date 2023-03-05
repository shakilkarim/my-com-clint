import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useLocation, useNavigate } from 'react-router-dom';
import Jumboton from '../../components/cards/Jumboton';
import { useAuth } from '../../context/auth';
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
            <Jumboton title='Login Page'></Jumboton>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <input type="email" className='form-control mb-4 p-2' placeholder='Enter your Email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                            <input type="password" className='form-control mb-4 p-2' placeholder='Enter your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input type="submit" className='btn btn-primary'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;