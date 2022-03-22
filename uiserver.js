require('dotenv').config();
const express = require('express');
const cors = require('cors')
const port = process.env.UI_SERVER_PORT || 3000;
const app = express();

const UI_API_ENDPOINT = process.env. UI_API_ENDPOINT || 'http://localhost:4000/graphql';
const env = { UI_API_ENDPOINT };
app.get('/env.js', function(req, res) {
  res.send(`window.ENV = ${JSON.stringify(env)}`)
})
app.use(express.static('public'));
app.use(cors())
app.listen(port,() => {
    console.log(`UI server started on port ${port}`);
})