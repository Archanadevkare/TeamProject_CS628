import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import graphQLFetch from './graphQlFetch.js';
import ListEmployees from "./listEmployees.jsx";

async function deleteRecord(empid) {
  const query = `mutation deleteEmployee($empid : Int!){
    deleteEmployee(empid: $empid)
      }`;      
  const data = await graphQLFetch(query,{empid});
  if (data) {
    alert(`Employee Record ${empid} deleted Successfully!`);
  }
}
    //  redirect() {
    //   < Route> Component = {<ListEmployees />}</Route> 
    //  }
     
export default function DeleteEmployee() {
  const { empid } = useParams();
  if(window.confirm("Delete the employee record?")){
  deleteRecord(parseInt(empid));
  }
  return (
      <div title="Outer div" className="nav-bar">
        <Navigate replace to = "/listEmployees"></Navigate>
         </div>
    );
    }
