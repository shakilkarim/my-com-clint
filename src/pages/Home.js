import React from 'react';
import Jumboton from '../components/cards/Jumboton';
import { useAuth } from '../context/auth';

const Home = () => {
    const [auth,setAuth] = useAuth()
    return (
        <div>
            <Jumboton title='Home Page'></Jumboton>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </div>
    );
};

export default Home;