
const express = require("express");
const dotenv = require('dotenv')

const taskRoute = require('./routes/task.route');
const authRoute = require('./routes/auth.routes');
const db = require('./config/db');
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();

db();
//routes

app.use("/api/tasks",authMiddleware, taskRoute);
app.use('/api/auth',authRoute);
app.get('/hello', (req,res)=>{
  res.status(200).json({message : "Hello node server"});
})

app.listen(port, () => {
  console.log(`Listening On ${port}`);
});

