// import * as R from 'ramda';
// import Url from '../../models';
import * as RF from 'ramda-fantasy';
import validUrl from 'valid-url';


/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */

// User Story 1:
// I can pass a URL as a parameter and I will receive a shortened
//  URL in the JSON response.

// User Story 2:
// If I pass an invalid URL that doesn't follow the invalid
//  http://www.example.com
//  format, the JSON response will contain an error instead.

// User Story 3:
// When I visit the shortened URL, it will redirect me to
//  my original link.

// possible R.compose below?
// validateURL -> searchDBFor(LongURL) -> createShortURL -> searchDBFor(ShortURL) -> saveURLs


// validateURL :: String -> Either (String, String)
const validateURL = url => validUrl.isWebUri(url) ? RF.Either.Right(url) : RF.Either.Left('Not a valid URL');


export {
  validateURL,
};
