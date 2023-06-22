const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
require('./dbconnection');
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) =>
  res.send(`Server Running`)
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log('listening to', PORT)
  });