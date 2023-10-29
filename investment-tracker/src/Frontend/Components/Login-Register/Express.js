// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const path = require('path');
// // Create a Set to store registered email addresses
// // const registeredEmails = new Set();
// const app = express();
// // const port = 8084;
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware
// const app = express();
// const port = 8084;

// // Enable CORS middleware
// app.use(cors());


// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3002'); // Allow requests from your React app
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

  // const customFetch = async (url, options = {}) => {
  //   const token = localStorage.getItem('jwtToken');

  //   if (token) {
  //     if (!options.headers) {
  //       options.headers = {};
  //     }

  //     options.headers.Authorization = `Bearer ${token}`;
  //   }

  //   const response = await fetch(url, options);

  //   if (!response.ok) {
  //     // Handle unauthorized or other error responses here
  //     console.error(`Error: ${response.status} - ${response.statusText}`);
  //   }

  //   return response;
  // };
// // Middleware for parsing JSON requests
// app.use(bodyParser.json());

// // Create an absolute path to the db.json file
// const dbFilePath = path.join(__dirname, 'db.json');
// let users = [];

// if (fs.existsSync(dbFilePath)) {
//   users = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
//   users.forEach((user) => registeredEmails.add(user.email));
// }

// // Route to handle user registration (signup)
// app.post('/addUser', (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Logging for debugging
//     console.log('Received data:', { name, email, password });

//     // Check if any of the fields are empty
//     if (!name || !email || !password) {
//       console.log('Empty field detected');
//       res.status(400).json({ message: 'All fields must be filled' });
//       return;
//     }
//     // Read existing user data from db.json using the absolute path
//     users = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

// // Check if the email already exists
// // if (registeredEmails.has(email)) {
// //   res.status(409).json({ message: 'Email ID already exists, try logging in' });
// //   return;
// // }
//     // Add the new user to the array
//     users.push(req.body);
//     // registeredEmails.add(email);
//     // // Write the updated user data back to db.json
//     // fs.writeFileSync(dbFilePath, JSON.stringify(users, null, 2));

//     res.status(200).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Route to handle user login with a GET request
// app.get('/getUsers', (req, res) => {
//   try {
//     const { email, password } = req.query;
//     const foundUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (foundUser) {
//       res.status(200).json({ message: 'User logged in successfully', user: foundUser });
//     } else {
//       res.status(401).json({ message: 'User login failed' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
