const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const MONGODB_URI='mongodb+srv://arjun:HVUlAqvmeEAbOSTk@cluster0.deb5y4o.mongodb.net/LLT'


require('dotenv').config();
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};





// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://arjun:HVUlAqvmeEAbOSTk@cluster0.deb5y4o.mongodb.net/LLT', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// Routes


const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);
app.use('/api/userlist',userRoutes)
// ...

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
