const express = require("express");

const mongoose = require("mongoose");
const taskRoute = require("./Routes/task.route");
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/tasks", taskRoute);
app.get('/hello', (req,res)=>{
  res.status(200).json({message : "Hello node server"});
})


mongoose
  .connect(
    "mongodb+srv://admin:2024@simple.go4s4hl.mongodb.net/SimpleTodo?retryWrites=true&w=majority&appName=Simple"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`Listening on port ; ${port}`);
    });
  })
  .catch(() => {
    console.log("Cannot connect to the Databsase");
  });

