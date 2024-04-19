const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Middleware for Basic Authentication
app.use(basicAuth({
    users: { 'username': 'password' }, // Replace 'username' and 'password' with your credentials
    unauthorizedResponse: (req) => {
        return 'Unauthorized';
    }
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// GET route
app.get('/api', (req, res) => {
    const queryParams = req.query;
    res.json(queryParams);
});

// POST route
app.post('/api', (req, res) => {
    const requestBody = req.body;
    res.json(requestBody);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
