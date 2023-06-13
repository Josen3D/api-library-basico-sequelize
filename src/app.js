// import config from dotenv
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import DB connection
import { dbConnect } from "./database/mysql.js";
// import book routes
import bookRoutes from "./routes/book.routes.js";

// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api", bookRoutes);

// if the requested route doesnt exist, send an error message
app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not found" });
});

// puut server to listen
app.listen(PORT, () => console.log("Server running on port: ", PORT));
// connect to DB
dbConnect();
