// class HelloWorld extends React.Component {
//     render()
//     {
//       const message = "Employee Portal";
//       const add = "Add an Employee";
//       const list = "List Employees";
//       return(
//       <div title="Outer div" className="nav-bar">
//       <h1>{message}</h1>
//       <button type ="submit" onClick={showData()}>{add}</button>&nbsp;&nbsp;&nbsp;
//       <button type ="submit">{list}</button>
//       </div>
//     );
//     }
    
//   }
async function loadData() {
  const response =  await fetch('http://localhost:4000', {
     method:'POST'/*select which method we should use*/,
     headers:{'content-type':'application/json'}/*select what content type we should use*/,
     body:JSON.stringify({query:`query {
      Employees {
        EmployeeList{
          _id
          empid
          fullName
          address
          age
          email
          phoneNumber
        }
      }
    }`})
  })
  
  const rsponseBody =  await response.json();
  return rsponseBody.data;
}

  class HelloWorld extends React.Component {
  constructor(props){
    super(props);
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

      if (props.EmployeesList) {

        props.EmployeesList.map(function(currentelement, index) {
          rows.push(<tr key={index}>{props.EmployeesList[index].empid}</tr>);
          // Returns the new value instead of the item
        
        });
      }
  
      return rows;

  }
  render() { 
    const message = "Employee Portal";
            const add = "Add an Employee";
            const listEmployees = "List Employees"; 
    return (
            <div title="Outer div" className="nav-bar">
            <h1>{message}</h1>
            <button type ="submit" >{add}</button>&nbsp;&nbsp;&nbsp;
            <button type ="submit" onClick={()=>this.showData()}>{listEmployees}</button>
            </div>
          );     
  }

}


const element = <HelloWorld />;

ReactDOM.render(element, document.getElementById('contents'));
  