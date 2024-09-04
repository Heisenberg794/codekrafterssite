const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this line to parse JSON data

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));



// MongoDB connection URI
const uri = 'mongodb+srv://itstonystark01:StarkTony01@stark.evvn8zm.mongodb.net/ckclub';

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error occurred while connecting to MongoDB', err);
    });

// Define a schema for your data
const formDataSchema = new mongoose.Schema({
    name: String,
    year: String,
    department: String,
    email: String,
    domain: String,
    wing: String
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Define route to handle form submission
app.post('/submit-form', (req, res) => {
    // Get form data from request body
    const formData = new FormData({
        name: req.body.Name,
        year: req.body.year,
        department: req.body.department,
        email: req.body.email,
        domain: req.body.domain,
        wing: req.body.wing
    });

    // Save form data to MongoDB using Mongoose
    formData.save()
        .then(() => {
            console.log('Data inserted successfully');
            res.status(200).send('Data inserted successfully');
        })
        .catch((err) => {
            console.error('Error occurred while inserting data into MongoDB', err);
            res.status(500).send('Internal Server Error');
        });
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
