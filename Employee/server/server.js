
const fs = require('fs')
const { ApolloServer } = require('apollo-server-express')
const { GraphQLScalarType } = require('graphql')
const { MongoClient } = require('mongodb')
const express = require('express')
const bson = require('mongodb').ObjectId;

const url = 'mongodb+srv://archana:Sukruti@cs628cluster.znum4.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
let db;


const resolvers = {
Query:{
    // list all the employees from the db
    EmployeesList :() => getAllEmployees(),
    
    //fetch an employee based on the id
    getEmployeebyId: (root,{ empid }) => {
        var empeeid = [];
        db.collection('Employees').find({"empid":empid}).toArray().then(result => {
                    // empeeid["empid"]= result[0].empid;
                    // empeeid["fullName"]= result[0].fullName;
                    // empeeid["address"]= result[0].address;
                    // empeeid["age"]= result[0].age;
                    // empeeid["email"]= result[0].email;
                    // empeeid["phoneNumber"] = result[0].phoneNumber;
                    empeeid =result[0];
                })
                return empeeid;
            },
        },
Mutation: {
    addEmployee,
    updateEmployee,
    deleteEmployee,
}
}

      
                      
     //to fetch all employess from database
 function getAllEmployees()
    {
        const employees = db.collection('Employees').find({}).toArray();
        return employees
    }

// async function getEmployeeById({empid}) 
// {
//     console.log(empid);
//            const emp = await db.collection('Employees').find({"empid":empid}).toArray();
//         //.collection('Employees').find({empid:empid}).toArray();
//     //  .then(result =>{
//     //     employee = result.toArray()})
//         console.log(emp);
//         return emp
// }

    //function to add a new employee
    async function addEmployee(_,{input}) {
        var myId = "Test";
        await db.collection('Employees').insertOne({empid : input.empid,fullName : input.fullName,address: input.address,age : input.age,email:input.email,phoneNumber:input.phoneNumber}).then(result => {
            id = result.insertedId;
            console.log(result.insertedId);
            myId = result.insertedId;
            })
        return myId;
        }


//function to update a given employee
        async function updateEmployee(_,{empid,fullName,address,age,email,phoneNumber}) {
            
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
      
        var employee = await db.collection('Employees').findOneAndDelete({"empid":empid});
        var deletedEmployee =employee.deletedid;
        if (!employee){
            throw new Error(`Couldn't find the employee with id ${id}`);
        }
        return deletedEmployee;
    }
    
    
    // function to connect to the database
async function connectToDb() {
    const client = new MongoClient(url, {useNewUrlParser: true});
    await client.connect();
    console.log('Connected to MongoDB at',url);
    db= client.db();
}

const server= new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql','utf-8'),
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
});

const app = express();

app.use(express.static('public'));

(async function() {
try {
    await server.start();
    server.applyMiddleware({app,path: '/graphql'});
    await connectToDb();
    app.listen(4000,function(){
        console.log('App started on port 4000');
    });
}
catch(err) {
    console.log('ERROR:',err);
}
})();