const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // frontend url
    methods: [ 'GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// middleware

app.use(express.json());




app.use('/api/blogs', blogRoutes);

//connect to mongoDb

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then (()=> console.log('MongoDb connected successfully'))
// .catch((error) => console.error('MongoDb connections error:', error));

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDb Connecteed successfully'))
.catch(err => console.error('MongoDb connection error:', err));






app.get('/', (req, res) => {
    res.send('Hello from the backend');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(` server is running on http://localhost:${PORT}`)
});
