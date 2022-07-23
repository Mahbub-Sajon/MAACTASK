import React from 'react';
import { Link, } from 'react-router-dom';

const DashboardNav = () => {
   
    return (
        <header>
            <div className="navbar bg-base-100">
                
                <div className="flex-none">
                  
                    <div className="dropdown dropdown-end ml-2">
                     
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                            <li> <Link to='create-region'> Create Region </Link></li>
                            <li> <Link to='create-area'> Create Area </Link></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div>
               
               
            </div>
        </header >
    );
};

export default DashboardNav;