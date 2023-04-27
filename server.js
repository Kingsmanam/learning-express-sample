const express = require("express");
const friendsRouter = require("./routes/friends.route");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
