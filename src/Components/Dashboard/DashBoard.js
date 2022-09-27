import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h2 className='text-2xl font-bold text-purple-500'>Welcome to Admin Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-50 bg-base-200 rounded text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li className='font-bold'><Link to="/admindashboard">All Donates</Link></li>
                <li className='font-bold'><Link to="/admindashboard/allloans">Requst For Loan</Link></li>
                <li className='font-bold'><Link to="/admindashboard/allhelps">All Helps</Link></li>
            </ul>

        </div>
    </div>


       
    );
};

export default DashBoard;


