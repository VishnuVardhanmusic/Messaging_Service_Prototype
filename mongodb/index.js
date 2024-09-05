import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB connected already!!");
    return;
  }
// Establishment of secure connection from Backend (Nodejs application) to Database (MongoDB tables) 
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "VVCHATDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log(error);
  }
};
