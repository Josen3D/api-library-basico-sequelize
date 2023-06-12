// import config from dotenv
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api", (req, res) => {
  res.send("Hello world");
});

// puut server to listen
app.listen(PORT, () => console.log("Server running on port: ", PORT));
