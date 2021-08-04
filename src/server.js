import express from 'express';
import mongoose from 'mongoose';

import * as constant from './constants.js';
import initializeDB from './modules/initialize/initialize.all.js';
import routing from './modules/routers.js';

async function startApp() {
  try {
    const app = express();

    app.use(express.json());

    routing(app);

    await mongoose.connect(constant.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });

    await initializeDB.initializeAll();

    app.listen(constant.PORT, () =>
      console.log('SERVER STARTED ON PORT ' + constant.PORT + ' 🙂')
    );
  } catch (err) {
    console.log(err);
  }
}

startApp();
