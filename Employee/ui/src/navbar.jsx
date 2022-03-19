import React from 'react';
import {Link} from 'react-router-dom';
import AddEmployee from './addEmployee.jsx';
import ListEmployees from './listEmployees.jsx';

export default class Navbar extends React.Component {

    render(){
        const message = "Employee Portal";
        const add = "Add an Employee";
        const listEmployees = "List Employees"; 
        const details = "Employee Details:";
        return(
            <div title="Outer div" className="nav-bar">
            <h1>{message}</h1>
            <button type ="submit" className="button" onClick={<AddEmployee />}>{add}</button>&nbsp;&nbsp;&nbsp;
            <button type ="submit" className="button" onClick={<ListEmployees />}>{listEmployees}</button>
            <h2>{details}</h2>
            
            </div>

        )
    }


}