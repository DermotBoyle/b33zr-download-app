// load up the express framework and body-parser helper
const express = require("express");
const cors = require("cors");
//set storage engine

// create an instance of express to serve our end points
const app = express();
app.use(cors());

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");

const PORT = 3001;

// port process.env.PORT ||

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

const routes = require("./routes/routes.js")(app, fs);

app.listen(PORT, () => {
	console.log(`listening at ${PORT}`);
});

module.exports = app;
