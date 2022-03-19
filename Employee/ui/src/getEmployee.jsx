import React from 'react';
import ReactDOM from 'react-dom';


async function loadData() {
  const response =  await fetch(window.UI_API_ENDPOINT, {
    method:'POST',
    headers:{'content-type':'application/json'}
    ,body:JSON.stringify({query:`query getEmployeebyId {
      getEmployeebyId(empid: $empid) {
      empid
      fullName
      address
      age
      email
      phoneNumber
    }        
  }`})
})
  
const rsponseBody =  await response.json();
console.log(rsponseBody);
return rsponseBody.data;
}

export default class GetEmployee extends React.Component{

constructor(props){
    super(props);
    //console.log(match.params);
    //console.log(props.getEmployeebyid[0].empid);
    this.state = {lists : []}
    }
    showData = ()=> {
    loadData().then(result => {
        // update the state using setState by assign result to list key.
        this.setState({lists: result}) 
        console.log(result);
            })
    }

    Display = (props) => {
      var rows = [];
      if (props.getEmployeebyid) {

        props.getEmployeebyid.map(function(currentelement, index) {
          rows.push(<tr key={index}><td>{props.getEmployeebyid[index].empid}</td>
          <td>{props.getEmployeebyid[index].fullName}</td>
          <td>{props.getEmployeebyid[index].address}</td>
          <td>{props.getEmployeebyid[index].age}</td>
          <td>{props.getEmployeebyid[index].email}</td>
          <td>{props.getEmployeebyid[index].phoneNumber}</td>
          </tr>);
          });
      }
  
      return rows;

  }
  render() { 
  const details = "Employee Details:";
  return (
    <div title="Outer div" className="nav-bar">
      console.log("getEmployee");
    <h2>{details}</h2>
    <table>
    <thead>
      <tr>
        <th>Employee Id</th>
      <th>Emp Name</th>
      <th>Address</th>
      <th>Age</th>
      <th>Email</th>
      <th>Contact Number</th>
      </tr></thead>
    <tbody>{this.Display(this.state.lists)}</tbody>
    </table>
    </div>
  );     
  }

}

const element = <GetEmployee />;
  
  ReactDOM.render(element, document.getElementById('contents'));