import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { router as userRouter } from './resources/user/user.routes';
import { router as statRouter } from './resources/stat/stat.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/stat', statRouter);

async function start() {
  try {
    await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connect to db');
    app.listen(port, () => {
      console.log(`App has been started on port ${port}`);
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

start();
