require('dotenv').config();
const { GraphQLScalarType } = require('graphql')
const express = require('express')

const { connectToDb } = require('./db.js');
const apiHandler = require('./api_handler.js');

const app = express();

//app.use(express.static('public'));
const port = process.env.API_SERVER_PORT || 4000;
(async function start() {
try {
    await apiHandler.startAndInstallHandler(app);
    await connectToDb();
    app.listen(port, () =>{
        console.log(`API server started on port ${port}`);
    });
}
catch(err) {
    console.log('ERROR:',err);
}
})();