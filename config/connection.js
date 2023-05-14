const mongoose = require("mongoose");

mongoose.connect(  // Url for your local mongoose host below
  process.env.MONGODB_URI || "mongodb://localhost:27017/the-book",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


mongoose.set("debug", true);

module.exports = mongoose.connection;
