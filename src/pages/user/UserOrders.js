import React from 'react';
import Jumboton from '../../components/cards/Jumboton';
import UserMenu from '../../components/nav/UserMenu';
import { useAuth } from '../../context/auth';

const UserOrders = () => {
    const [auth,setAuth] = useAuth();
    return (
        <div>
            <Jumboton title={auth?.user?.name}></Jumboton>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu></UserMenu>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Orders</div>
                        <p>Create Order form...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrders;