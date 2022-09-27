
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
     navigate('/login')
  }
    return (
        <div>
                <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">UIU Croudfounding</a>
  </div>
  <div className="flex-none navbar-center gap-2">
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li tabindex="0">
        <a>
          Our Work
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100 z-10">
          <li><Link to="/donate">Donation</Link></li>
          <li><Link to="/requestforloan">Request For Loan</Link></li>
        </ul>
      </li>
      
    </ul>
  </div>
    <div className="dropdown dropdown-end">
    <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      {
        user? <li><button onClick={logout}>Log Out</button></li>
        : <li><Link to="/login">Login</Link></li>
      }
    </ul>
  </div>
     
    </div>
  </div>
</div>
        </div>
    );
};
export default NavBar;