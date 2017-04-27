// import * as R from 'ramda';
import * as RF from 'ramda-fantasy';
import mongoose from 'mongoose';
import {
  Url,
} from '../../models';

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */


// connectToDB :: String -> Future Error String
const connectToDB = DB => RF.Future((reject, resolve) =>
  mongoose.connect(DB, err => err ? reject(err) : mongoose.connection.once('open', resolve)));

// searchForUrl :: String -> Future Error JSON
const searchForUrl = query => RF.Future((reject, resolve) =>
  Url.findOne({
    original_url: query,
  }, (err, result) => err ? reject(err) :
  resolve(result)));


export {
  connectToDB,
  searchForUrl,
};
