// Env variables
require('dotenv').config()

// Dependencies
const express = require('express');
const fs = require('fs')
const cors = require('cors');

// Express instance
const app = express();

// HTTPS server config
// var options = {
//     key: fs.readFileSync(process.env.DOMAIN_KEY),
//     cert: fs.readFileSync(process.env.DOMAIN_CERT)
// };

// const server = require('https').createServer(options, app);

// HTTP server config
// const server = require('http').createServer(app);

// middlewares
app.use(cors());
app.use(express.json());

// Use routes
app.use("/default", require("./src/routes/default"));

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port ${port}`))