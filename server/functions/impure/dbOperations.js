import * as RF from 'ramda-fantasy';
import mongoose from 'mongoose';


/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */


// connectToDB :: String -> Future Error String
const connectToDB = DB => RF.Future((reject, resolve) =>
  mongoose.connect(DB, err => err ? reject(err) : mongoose.connection.once('open', resolve)));


export {
  connectToDB,
};
