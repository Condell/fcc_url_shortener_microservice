import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';


dotenv.config();


if (env === 'development') {
  app.use(morgan('dev'));
}


mongoose.connect(process.env.MONGOLAB_URI);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('communication error', err);
});

db.once('open', () => {
  console.log('connected to db');
});


app.get('/', (req, res) => {
  res.json({
    serverStatus: 'running',
  });
});


// TODO: Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
