import {
  expect,
} from 'chai';
import {
  validateURL,
} from './modifyURL';
import * as RF from 'ramda-fantasy';
import * as R from 'ramda';

/* eslint-disable no-unused-expressions */


describe('modifyURL tests', () => {
  const valid = 'http://www.google.com';
  const invalid = 'google';
  describe('validateURL tests', () => {
    it('should return the url when provided a valid URL', () => {
      expect(validateURL(valid)).to.eql(RF.Either.Right(valid));
    });
    it('should return false when provided an invalid URL', () => {
      expect(validateURL(invalid)).to.eql(RF.Either.Left('Not a valid URL'));
    });
  });
});
