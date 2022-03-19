import React from 'react';
import { NavLink } from 'react-router-dom';
//import Navbar from './navbar.jsx';
import Contents from './Contents.jsx';
import ListEmployees from './listEmployees.jsx';

function NavBar() {
    return (
        <nav>
            <NavLink exact="true" to ='/'>Home</NavLink>
            {' | '}
            <NavLink to="/listEmployees">List Employees</NavLink>
            {' | '}
            <NavLink to="/create">Add an Employee</NavLink>
            
        </nav>
        );
}

export default  function Page() {
    return (
        <div>
            <h1>Employee Information</h1>
           <NavBar />
           <Contents />
            
        </div>
    );
}