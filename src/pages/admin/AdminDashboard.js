import React from 'react';
import Jumboton from '../../components/cards/Jumboton';
import AdminMenu from '../../components/nav/AdminMenu';
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {

    const [auth,setAuth] = useAuth();
    return (
        <div>
            <Jumboton title={auth?.user?.name}  subTitle="Admin Dashboard"></Jumboton>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>
                        <ul className="list-group">
                            <li className="list-group-item">{auth?.user?.name}</li>
                            <li className="list-group-item">{auth?.user?.email}</li>
                            <li className="list-group-item">Admin</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;