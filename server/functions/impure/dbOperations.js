import * as R from 'ramda';
import * as RF from 'ramda-fantasy';
import mongoose from 'mongoose';
import {
  Url,
} from '../../models';


/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */


// trace :: String -> Object -> Object
const trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});


// connectToDB :: String -> Future Error String
const connectToDB = DB => RF.Future((reject, resolve) =>
  mongoose.connect(DB, err => err ? reject(err) : mongoose.connection.once('open', resolve)));


// searchDbFor :: String -> Future Error JSON
const searchDbFor = query => RF.Future((reject, resolve) =>
  Url.findOne({
    original_url: query,
  }, (err, result) => err ? reject(err) : resolve(result)));


export {
  connectToDB,
  searchDbFor,
};
