import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import graphQLFetch from './graphQlFetch.js';
export default class AddEmployee extends React.Component{
  state = { redirect: null };

  constructor(props,context) {
    super(props,context);
  
  //This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async createEmployee(employee) {
    const query = `mutation addEmployee($employee : inEmployee!){
      addEmployee(input: $employee)
        }`;
    const data = await graphQLFetch(query, { employee });
    if (data) {
      alert("Record Inserted Successfully!");
      return <Navigate replace to="/listEmployees"/>
    }
    
  }
async handleSubmit(event) {
  event.preventDefault();
  const form = document.forms.employeeAdd;
  const data = {
    empid : parseInt(form.empid.value),
    fullName: form.fullName.value,
    address : form.address.value,
    age : parseInt(form.age.value),
    email : form.email.value,
    phoneNumber : form.phoneNumber.value}

  this.createEmployee(data);
  form.empid.value=''; form.fullName.value ='';form.address.value = '';form.age.value='';form.email.value ='';form.phoneNumber.value='';    
}
render() { 
  return (
  <div title="Outer div" className="nav-bar">    
  <form name ="employeeAdd" onSubmit={this.handleSubmit}>
    <label>Employee Id: <input type="text" name="empid" required/> </label><br/>
    <br/>
    <label>Full Name: <input type="text" name="fullName" required/> </label><br/><br/>
    <label>Address: <input type="text" name="address" required/> </label><br/><br/>
    <label>Age: <input type="text" name="age" required /> </label><br/><br/>
    <label>Email: <input type="email" name="email" required /> </label><br/><br/>
    <label>Phone No: <input type="text" name="phoneNumber" required /> </label><br/><br/>
    <button>Submit</button>
  </form>
  </div>
);     
};
}

const element = <AddEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));