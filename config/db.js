const mongoose = require("mongoose");

module.exports = async () => {
  const uri =
    "mongodb+srv://mwai:2020@simple.go4s4hl.mongodb.net/test?retryWrites=true&w=majority&appName=Simple";
  mongoose
    .connect(uri)
    .then((connection) =>
      console.log(`MongoDb Database server at: ${connection.connection.host}`)
    )
    .catch((err) => console.log(err));
};
