import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AddEmployee from './addEmployee.jsx';
import ListEmployees from './listEmployees.jsx';
import GetEmployee from './getEmployee.jsx';
//import UpdateEmployee from './updateEmployee.jsx';
//import DeleteEmployee from './deleteEmployee.jsx';

function  NotFound ()  { <h1>Page Not Found</h1> };

export default function Contents() {  
  console.log("functioncall");
  return (
    <Routes>
      <Route path="/"  />
      <Route path="/listEmployees" element={<ListEmployees />} />
      <Route path="/GetEmployee/:empid" element={<GetEmployee />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      {/* <Route path="/edit/:id" element={<UpdateEmployee />} />
      <Route path="/delete/id" element={<DeleteEmployee />} /> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}