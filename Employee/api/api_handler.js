require('dotenv').config();
const fs = require('fs')
const { ApolloServer } = require('apollo-server-express');
const employees = require('./employees.js')
const bson = require('mongodb').ObjectId;

const resolvers = {
    Query:{
    EmployeesList: employees.getAllEmployees,
    getEmployeebyId: employees.getEmployeeById,
        },
    Mutation: {
    addEmployee: employees.addEmployee,
    updateEmployee: employees.updateEmployee,
    deleteEmployee: employees.deleteEmployee,
    }
    }

const server= new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql','utf-8'),
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
});

async function startAndInstallHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    await server.start();
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = {
  startAndInstallHandler,
};

