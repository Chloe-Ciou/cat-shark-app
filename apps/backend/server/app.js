import express from "express";
import bodyParser from "body-parser";

import "./config";
import router from "./router";
import mwError from "./middleware/mwError";

const app = express();
const { PORT, NODE_ENV } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Header", "X-Requested-With, content-type");
  next();
});

// setup router
app.use("", router);

// setup custom error handler and generic 404
app.use(mwError);
app.use((req, res) => {
  res.status(404).send({
    statusCode: 404,
    message: "Not Found"
  });
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started as ${PORT} in ${NODE_ENV} mode`);
  } else {
    console.log("Error occurred, server can't start", err);
  }
});

export default app;
