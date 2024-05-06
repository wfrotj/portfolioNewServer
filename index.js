import app from "./app.js";
import config from "./config/config.js";

app.listen(config.PORT, (req, res) =>
  console.log(`connected at port ${config.PORT}`)
);
