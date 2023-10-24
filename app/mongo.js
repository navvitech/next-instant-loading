import mongoose from "mongoose";

var connections=0;

export const DBConnect = async () => {
  const status = mongoose.connection.readyState;
  if (status === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("connected succesfully", ++connections);
    } catch (error) {
      console.log("mongodb connection err", error);
    }
  }
};
