import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
const Register = () => {
    //SIte state define
    const [name,setName] =useState('Shakil karim');
    const [email,setEmail] =useState('shakil1997@gmail.com');
    const [password,setPassword] =useState('Shakil1997');

    //Hooks
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth()
    //From submit data function
    const handleSubmit =async (e) => {
        //Loading handle 
        e.preventDefault();
        try{
            const {data} = await axios.post(
                //Register route handle 
                `/register`,
                {
                    name,
                    email,
                    password,
                }
            );

            console.log(data);
            if(data?.error){
                toast.error(data.error);
            }else{
                //Response data set localStorage 
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth({...auth,user:data.user, token:data.token})
                toast.success("Registration successful");
                //Route navigate differnet 
                navigate("/");
            }
        }catch(err){
            console.log(err);
            toast.error('Register failed try again');
        }
    }
    return (
        <div>
             {/* <Jumboton title='Register Page'></Jumboton> */}
           

         <div className="Auth-form-container">
                <form onSubmit={handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="form-group mt-3">
                        <label>User Name</label>
                        <input
                        value={name}
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
    );
};

export default Register;