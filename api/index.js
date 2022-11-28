import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// module
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import dbConnection from "./utils/db.js";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use(morgan("common"));

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  dbConnection();
  console.log(`server running on port ${port}`);
});
