const experss = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TodoRoute");

const port = process.env.PORT || 5000;
const app = experss();
app.use(cors());
app.use(experss.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to database"))
  .catch((e) => console.log(e));

app.use(routes);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
