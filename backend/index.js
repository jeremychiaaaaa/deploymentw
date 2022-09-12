const express = require("express");
const cors = require("cors");


const stripe = require("./routes/stripe");



const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use("/api/stripe", stripe);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

