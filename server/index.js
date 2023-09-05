const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const newWorkoutRoute = require('./routes/newWorkout');
// end of imports///////////////////////

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', authRoutes);
app.use('/api/newWorkout', newWorkoutRoute);

const PORT = 3001 || 5000;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://dolev6780:DolevMyHealth@cluster0.4allkir.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>{console.log("server port", PORT)});
}).catch((err)=>{console.log(err,"err something went wrong")});