import express from 'express';
import mongoose from 'mongoose';

import { DB_URL, PORT } from './constants.js';
import initializeDB from './modules/initialize/initialize.all.js';
import routing from './modules/routers.js';
import { validation } from './common/validation/validation.js';

async function startApp() {
  try {
    const app = express();

    app.use((req, res, next) => {
      const result = true;

      if (req.method === 'POST') {
        validation(req.url, req.body);
      }

      if (result) {
        next();
      }
      res.status(400).json('Invalid data');
    });

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
