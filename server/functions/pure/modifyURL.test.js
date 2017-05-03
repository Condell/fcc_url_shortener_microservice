import * as RF from 'ramda-fantasy';
// import * as R from 'ramda';
import {
  expect,
} from 'chai';
import {
  validateURL,
} from './modifyURL';


/* eslint-disable no-unused-expressions */


describe('modifyURL tests', () => {
  const valid = 'https://www.google.com';
  const invalid = 'google';
  describe('validateURL tests', () => {
    it('should return the url when provided a valid URL', () => {
      expect(validateURL(valid)).to.eql(RF.Either.Right(valid));
    });
    it('should return null when provided an invalid URL', () => {
      expect(validateURL(invalid)).to.eql(RF.Either.Left(null));
    });
  });
});
