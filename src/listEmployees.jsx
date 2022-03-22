import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

async function loadData() {
  const response =  await fetch(window.ENV.UI_API_ENDPOINT, {
    method:'POST',
    headers:{'content-type':'application/json'}
    ,body:JSON.stringify({query:`query EmployeesList {
    EmployeesList {
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
console.log (rsponseBody);
return rsponseBody.data;
}
  
export default class ListEmployees extends React.Component {
  constructor(props){
    super(props);
    this.state = {lists : []}
  }
  showData = ()=> {
    loadData().then(result => {
      // update the state using setState by assign result to list key.
      this.setState({lists: result}) 
    })
  }

  componentDidMount() {
    this.showData();
  }

  
Display = (props) => {
  var rows = [];
  if (props.EmployeesList) {
    props.EmployeesList.map(function(currentelement, index) {
    rows.push(<tr key={index}><td>{props.EmployeesList[index].empid}</td>
    <td>{props.EmployeesList[index].fullName}</td>
    <td>{props.EmployeesList[index].address}</td>
    <td>{props.EmployeesList[index].age}</td>
    <td>{props.EmployeesList[index].email}</td>
    <td>{props.EmployeesList[index].phoneNumber}</td>
    <td><Link to={`/edit/${props.EmployeesList[index].empid}`}>Edit</Link></td>
    <td><Link to={`/delete/${props.EmployeesList[index].empid}`}>Delete</Link></td>
    </tr>);
    });
  }

return rows;

}
render() { 
  const details = "Employee Details:";
  return (
    <div title="Outer div" className="nav-bar">    
    <h2>{details}</h2>&nbsp;&nbsp;&nbsp;
    <table width= '100%'>
      <thead>
        <tr>
          <th width= '100%'>Employee Id</th>
          <th>Emp Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Email</th>
          <th>Contact Number</th>
        </tr>
      </thead>
    <tbody>{this.Display(this.state.lists)}</tbody>
    </table>
    </div>
        );     
}
}
  
  
const element = <ListEmployees />;
  
ReactDOM.render(element, document.getElementById('contents'));
    