const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //to have environment variables in the dotenv file

const app = express(); //express server
const port = process.env.PORT || 5000; //port of the server will be ON.

app.use(cors()); //middleware
app.use(express.json()); //to parse jsons

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
// mongoose.set('strictQuery', false);

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
console.log(`Server is running on port: ${port}`);
});