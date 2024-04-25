
const express = require("express");

const taskRoute = require("./Routes/task.route");
const db = require('./Config/db');

const app = express();

const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db();
//routes

app.use("/api/tasks", taskRoute);
app.get('/hello', (req,res)=>{
  res.status(200).json({message : "Hello node server"});
})

app.listen(port, () => {
  console.log(`Listening On ${port}`);
});

