//Import the mongoose module
import mongoose from "mongoose";
//Set up default mongoose connection
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/betna";
mongoose.Promise = Promise;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log(`connected to MongoDB @ ${MONGO_URI}`);
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(`Mongoose default connection disconnected through app \
  termination`);
  });
});

export default db;
