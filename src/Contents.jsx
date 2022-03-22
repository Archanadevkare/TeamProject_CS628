import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddEmployee from './addEmployee.jsx';
import ListEmployees from './listEmployees.jsx';
import UpdateEmployee from './updateEmployee.jsx';
import DeleteEmployee from './deleteEmployee.jsx';

function  NotFound ()  { 
return <h1>Page Not Found</h1> };

export default function Contents() {  
   
    return (

    <Routes>
      <Route path="/"  />
      <Route path="/listEmployees" element={<ListEmployees />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/edit/:empid" element={<UpdateEmployee />} />
      <Route path="/delete/:empid" element={<DeleteEmployee />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
