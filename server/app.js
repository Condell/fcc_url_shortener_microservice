import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import index from './routes/index';
import newUrl from './routes/newUrl';
import {
  connectToDB,
} from './functions/impure/dbOperations';

const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';


dotenv.config();


if (env === 'development') {
  app.use(morgan('dev'));
}


connectToDB(process.env.MONGOLAB_URI)
  .fork(err => console.error('Error connecting to the database; Error:', err), // eslint-disable-line no-console
        () => console.log('Connected to the database')); // eslint-disable-line no-console


app.use(bodyParser.json());


app.use('/', index);
app.use('/new', newUrl);


// TODO: Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});


export default app;
