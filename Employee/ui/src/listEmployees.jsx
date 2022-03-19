import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

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
    console.log("inside mount");
    this.showData();
  }

  
Display = (props) => {
  var rows = [];
  if (props.EmployeesList) {
    props.EmployeesList.map(function(currentelement, index) {
    rows.push(<tr key={index}><td><NavLink to ={{pathname:"/GetEmployee/"+ `${props.EmployeesList[index].empid}`}}>{props.EmployeesList[index].empid}</NavLink></td>
    </tr>);
    });
  }

return rows;

}
render() { 
  const details = "Employee Details:";
  return (
    <div title="Outer div" className="nav-bar">
      console.log(listemployee);
    {/* <button type ="submit" className="button" onClick={()=>this.showData()}>List Employees</button>&nbsp;&nbsp;&nbsp; */}
    <h2>{details}</h2>&nbsp;&nbsp;&nbsp;
    <table width= '100%'>
      <thead>
        <tr>
          <th width= '100%'>Employee Id</th>
        </tr></thead>
      <tbody>{this.Display(this.state.lists)}</tbody>
      </table>
      </div>
        );     
}
}
  
  
const element = <ListEmployees />;
  
ReactDOM.render(element, document.getElementById('contents'));
    