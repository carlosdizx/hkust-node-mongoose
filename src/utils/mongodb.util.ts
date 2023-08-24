import { connect, connection } from "mongoose";

const url = "mongodb://localhost:27017/conFusion";
const connectMongodb = async () => {
  try {
    await connect(url);
    connection
      .on("error", console.error.bind(console, "Error connecting to MongoDB"))
      .once("open", () => console.log("Connected to Mongo successfully!"));
  } catch (error) {
    throw error;
  }
};

export default connectMongodb;
