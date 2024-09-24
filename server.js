const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');


app.use(cors());
app.use(express.json());


//Read Dummy Data
let locationData = [];
fs.readFile('data.json',(err, data) => {
    if (err) throw err;
    locationData = JSON.parse(data);
});
// Define a simple route
app.get('/api/vehicle-location', (req, res) => {
    res.json(locationData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
