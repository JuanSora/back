//***express***
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

app.get("/lists", (req, res, next) => {
  res.json({
      "hello World",
      'env':process.env.MSG ||'noexiste',
      'port':port
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});