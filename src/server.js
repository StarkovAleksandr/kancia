import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import * as fs from "fs";

import * as constant from "./constants.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    if (!fs.existsSync("static")) {
      fs.mkdirSync("static");
    }

    await mongoose.connect(constant.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });
    app.listen(constant.PORT, () =>
      console.log("SERVER STARTED ON PORT " + constant.PORT)
    );
  } catch (err) {
    console.log(err);
  }
}

startApp();
