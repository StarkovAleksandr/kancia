import express from 'express';
import mongoose from 'mongoose';

import { DB_URL, PORT } from './constants.js';
import initializeDB from './modules/initialize/initialize.all.js';
import routing from './modules/routers.js';

async function startApp() {
  try {
    const app = express();

    // app.use((req, res, next) => {
    //   next();
    //   console.log('Middleware 1');
    // });

    // app.use((req, res, next) => {
    //   console.log('Middleware 2');
    //   next();
    // });

    app.use(express.json());

    routing(app);

    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });

    await initializeDB.initializeAll();

    app.listen(PORT, () =>
      console.log('SERVER STARTED ON PORT ' + PORT + ' 🙂')
    );
  } catch (err) {
    console.log(err);
  }
}

startApp();
