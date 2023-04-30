const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const indexRoute = require('./routes/index');

const app = express();
dotenv.config();



// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', indexRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});