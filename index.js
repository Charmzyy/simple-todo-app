
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./Routes/task.route");
const app = express();

const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/tasks", taskRoute);
app.get('/hello', (req,res)=>{
  res.status(200).json({message : "Hello node server"});
})

// MongoDB connection using MongoClient
const uri = "mongodb+srv://admin:2024@simple.go4s4hl.mongodb.net/SimpleTodo?retryWrites=true&w=majority&appName=Simple";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Start the Express server after successful MongoDB connection
    app.listen(port, () => {
      console.log(`Listening On ${port}`);
    });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

