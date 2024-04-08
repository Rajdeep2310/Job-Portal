//Importing packages and functions...
const express = require("express");
const colors = require("colors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Routes/userAuthRoutes");
const jobRouter = require("./Routes/jobRoutes");
const cookieParser = require("cookie-parser");
// configuring dotenv files
dotenv.config();

// Some Middlewares...
app.use(express.json());
app.use(cookieParser());

// Database Connection ....
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected to MongoDB Database     `.italic.bgGreen);
  })
  .catch((err) => {
    console.log(err);
  });

//Listening Port...

app.listen(1000, () => {
  console.log(`Server is running on port : 1000  `.italic.bgBlue);
});

// Application Routes ...
app.use("/api", userRouter);
app.use("/api/auth", jobRouter);
