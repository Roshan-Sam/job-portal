import mongoose from "mongoose";

// function to connect to the database

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("database connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
};

export default connectDB;
