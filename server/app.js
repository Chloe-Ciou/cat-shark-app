import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import "./config";
import mwError from "./middleware/mwError";
import { getImages } from "./middleware/mwServices";
import { validateImagesMetadataRequest } from "./middleware/mwValidators";

const app = express();
const { PORT, NODE_ENV } = process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(express.static(join(__dirname, "..", "build")));

// setup headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Header", "X-Requested-With, content-type");
  next();
});

// setup router
app.get("/images", validateImagesMetadataRequest, getImages);

// setup custom error handler and generic 404
app.use(mwError);

app.use((req, res, next) => {
  res.sendFile(join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started as ${PORT} in ${NODE_ENV} mode`);
  } else {
    console.log("Error occurred, server can't start", err);
  }
});

export default app;
