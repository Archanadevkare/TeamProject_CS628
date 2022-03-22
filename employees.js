const { getDb} = require('./db.js');

//to fetch all employess from database
async function getAllEmployees()
{
    const db =getDb();
    const employees =await db.collection('Employees').find({}).toArray();
    return employees
}
 
async function getEmployeeById(root,args,context,info) 
{
    var employee =[];
    const db = getDb();
    employee =await db.collection('Employees').find({"empid":args.empid}).toArray();
    console.log(employee);
    return employee[0];
        
}
 
//function to add a new employee
async function addEmployee(_,{input}) {
    var myId ="";
    const db =getDb();
    await db.collection('Employees').insertOne({empid : input.empid,fullName : input.fullName,address: input.address,age : input.age,email:input.email,phoneNumber:input.phoneNumber}).then(result => {
        id = result.insertedId;
        console.log(result.insertedId);
        myId = result.insertedId;
        })
    return myId;
    }
 
//function to update a given employee
async function updateEmployee(_,{empid,fullName,address,age,email,phoneNumber}) {
    const db =getDb();
    var employeeid = await db.collection('Employees').findOneAndUpdate({"empid":empid},{$set:{"fullName":fullName,"address":address,"age":age,"email":email,"phoneNumber":phoneNumber}},{returnNewDocument:true});
    console.log(employeeid);
    if (!employeeid){
        throw new Error(`Couldn't find the employee with id ${id}`);
    }    
    employeeid.empid = empid;
    employeeid.fullName =fullName;
    employeeid.address =address;
    employeeid.age =age;
    employeeid.email=email;
    employeeid.phoneNumber=phoneNumber;   
    return employeeid;
}
 
//function to delete a given employee
async function deleteEmployee(_,{empid}) {
    const db =getDb();
    var employee = await db.collection('Employees').findOneAndDelete({"empid":empid});
    var deletedEmployee =employee.deletedid;
    console.log(deleteEmployee);
    if (!employee){
        throw new Error(`Couldn't find the employee with id ${id}`);
    }
    return deletedEmployee;
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}

     
  