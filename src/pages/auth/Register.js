import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import Jumboton from '../../components/cards/Jumboton';
const Register = () => {
    //SIte state define
    const [name,setName] =useState('Shakil karim');
    const [email,setEmail] =useState('shakil1997@gmail.com');
    const [password,setPassword] =useState('Shakil1997');

    //Hooks
    const navigate = useNavigate();
    
    //From submit data function
    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(
                `${process.env.REACT_APP_API}/register`,
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
                localStorage.setItem('auth', JSON.stringify(data));
                toast.success("Registration successful");
                navigate("/");
            }
        }catch(err){
            toast.error('Register failed try again')
        }
    }
    return (
        <div>
            <Jumboton title='Register Page'></Jumboton>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-4 p-2" placeholder="Enter your name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <input type="email" 
                            className='form-control mb-4 p-2'
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="password" className='form-control mb-4 p-2'placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />

                            <button className='btn btn-primary' type='submit'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;