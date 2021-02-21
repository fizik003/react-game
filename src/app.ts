import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const port = process.env.PORT;
app.get('/', (req, res) => res.send('h1'));

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
