import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import graphQLFetch from './graphQlFetch.js';
import  { useState, useEffect } from 'react';
import ListEmployees  from './listEmployees.jsx';

export default function UpdateEmployee() {
    const { empid } = useParams();
   
    const [employeeData, setEmployeeData] = useState({});
    const [times, setTimes] = React.useState(0);

    useEffect(() => {
      loadData(parseInt(empid)).then(result => {
        setEmployeeData(employeeData => ({
          ...employeeData,
          ...result.getEmployeebyId
        }));
        
      })
      
  }, [times]);

  function handleOnChange(event) {
    // event.preventDefault();
      let tempEmployeeData = employeeData;
    
     if(event.target.name == 'fullName')
        tempEmployeeData.fullName = event.target.value;
      if(event.target.name == 'empid')
        tempEmployeeData.empid = event.target.value;
      if(event.target.name == 'address')
        tempEmployeeData.address = event.target.value;
      if(event.target.name == 'age')
        tempEmployeeData.age = event.target.value;
      if(event.target.name == 'email')
        tempEmployeeData.email = event.target.value;
      if(event.target.name == 'phoneNumber')
        tempEmployeeData.phoneNumber = event.target.value;

    setEmployeeData(employeeData => ({
     ...employeeData,
     ...tempEmployeeData
   }));
   }

   async function UpdateChangedEmployee(employee)
   {
      const query = `mutation updateEmployee($empid:Int!,$fullName:String!,$address:String!,$age:Int!,$email:String!,$phoneNumber:String!){
        updateEmployee(empid : $empid, fullName : $fullName,address :$address,age :$age,email:$email,phoneNumber : $phoneNumber ) {empid, fullName, address, age, email, phoneNumber}
          }`;
      const data = await graphQLFetch(query,{
        "empid":employee.empid,
          "fullName":employee.fullName,
          "address":employee.address,
          "age":employee.age,
          "email":employee.email,
          "phoneNumber":employee.phoneNumber});

      if (data) {
        alert("Record updated Successfully!");
        return <Navigate replace to = "/listEmployees"></Navigate>
   }
   
  }

   async function handleSubmit(event) {
     if(event){
    event.preventDefault();
    const data = {
      empid : parseInt(employeeData.empid),
      fullName: employeeData.fullName,
      address : employeeData.address,
      age : parseInt(employeeData.age),
      email : employeeData.email,
      phoneNumber : employeeData.phoneNumber}
      UpdateChangedEmployee(data);
    }
  }

  async function loadData(empid) {
  const query = `query getEmployeebyId($empid : Int!) {
    getEmployeebyId(empid: $empid) {
    empid
    fullName
    address
    age
    email
    phoneNumber
  }        
  }`
  if(empid!=null){
  const response = await graphQLFetch(query, {empid});
  return response;
  }
  }
    
    return (
        <div> 
         <form name ="employeeUpdate" onSubmit={handleSubmit}>
    <label>Employee Id: </label> <input type="text"   name="empid" value={employeeData.empid?employeeData.empid:0}  /><br/><br/>
    <label>Full Name:</label> <input type="text" contentEditable="true" name="fullName" value={employeeData.fullName}  onChange = {handleOnChange} /> <br/><br/>
    <label>Address: <input type="text" name="address" contentEditable="true" value={employeeData.address?employeeData.address:""} onChange = {handleOnChange} /> </label><br/><br/>
    <label>Age: <input type="text" name="age" contentEditable="true" value={employeeData.age?employeeData.age:0} onChange = {handleOnChange} /> </label><br/><br/>
    <label>Email: <input type="email" name="email" contentEditable="true" value={employeeData.email?employeeData.email:""} onChange = {handleOnChange}  /> </label><br/><br/>
    <label>Phone No: <input type="text" name="phoneNumber" contentEditable="true" value={employeeData.phoneNumber?employeeData.phoneNumber:0} onChange = {handleOnChange} /> </label><br/><br/>
    <button onClick={handleSubmit()}>Submit</button>
  </form>
        </div>
    );
}



const element = <UpdateEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));