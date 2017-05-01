// import * as R from 'ramda';
// import Url from '../../models';
import * as RF from 'ramda-fantasy';
import validUrl from 'valid-url';


/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */


// possible R.compose below?
// validateURL -> searchDBFor(LongURL) -> createShortURL -> searchDBFor(ShortURL) -> saveURLs


// validateURL :: String -> Either (String, String)
const validateURL = url => validUrl.isWebUri(url) ? RF.Either.Right(url) : RF.Either.Left('Not a valid URL');


export {
  validateURL,
};
