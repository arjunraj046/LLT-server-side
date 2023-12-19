
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
router.post('/register', register);

// // Handle login request
// router.post('/login', (req, res) => {
//   // Your login logic here...
//   const { username, password } = req.body;
//   console.log('Received login request:', { username, password });

//   // Perform login logic and respond accordingly...
// });


router.post('/login', login);
module.exports = router;
