const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-networking",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

mongoose.set("debug", true);

app.use(require("debug", true));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
