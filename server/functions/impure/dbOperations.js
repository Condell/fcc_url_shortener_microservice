import * as R from 'ramda';
import * as RF from 'ramda-fantasy';
import mongoose from 'mongoose';
import {
  Url,
} from '../../models';
// import {
//   validateURL,
// } from '../pure/modifyURL';


/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */


// trace :: String -> Object -> Object
const trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});


// connectToDB :: String -> Future Error String
const connectToDB = DB => RF.Future((reject, resolve) =>
  mongoose.connect(DB, err => err ? reject(err) : mongoose.connection.once('open', resolve)));


// searchDbFor :: String -> Future Error JSON
const searchDBFor = value => RF.Future((reject, resolve) => {
  Url.findOne({
    $or: [{
        original_url: {
          $eq: value,
        },
      },
      {
        short_url: {
          $eq: value,
        },
      },
    ],
  }, {
    original_url: 1,
    short_url: 1,
    _id: 0,
  }, (err, result) => err ? reject(err) : resolve(result));
});


// nullCheck :: String -> Future JSON JSON
const nullCheck = data => RF.Future((reject, resolve) =>
  R.isNil(data) ? reject(data) : resolve(data));


// returnJSON :: -> String -> JSON
const returnJSON = R.compose(R.chain(nullCheck), searchDBFor);


export {
  connectToDB,
  searchDBFor,
  trace,
  returnJSON,
};
