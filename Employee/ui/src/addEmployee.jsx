import React from 'react';
import ReactDOM from 'react-dom';

async function loadData() {
  const response =  await fetch(window.UI_API_ENDPOINT, {
    method:'POST',
    headers:{'content-type':'application/json'}
    ,body:JSON.stringify({query:`mutation addEmployee{
      addEmployee(input:
      {
        empid:input.empid,
        fullName:input.fullName
        address:input.address,
        age:input.age,
        email:input.email,
        phoneNumber:input.phoneNumber
      })
    
    }`})
})
  
const rsponseBody =  await response.json();
console.log(rsponseBody);
return rsponseBody.data;
}

export default class AddEmployee extends React.Component{

}

const element = <AddEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));