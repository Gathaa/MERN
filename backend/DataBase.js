const mongoose = require("mongoose");

// Export a function that connects to the database
module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to the database successfully!!");
  } catch (error) {
    console.error("Error occurred while connecting to the database:", error);
  }
};
