import {
  expect,
} from 'chai';
import {
  isValidUrl,
  // validUrl,
  // notValidUrl,
  // makeShortUrl,
  // createJsonResponse
} from './modifyURL';


/* eslint-disable no-unused-expressions */


describe('modifyURL tests', () => {
  describe('isValidUrl tests', () => {
    const valid = 'http://www.google.com';
    const invalid = 'google';
    it('should return true when provided a valid URL', () => {
      expect(isValidUrl(valid)).to.be.true;
    });
    it('should return false when provided an invalid URL', () => {
      expect(isValidUrl(invalid)).to.be.false;
    });
  });
  // xdescribe('validUrl tests', () => {

  // });
  // xdescribe('notValidUrl tests', () => {

  // });
  // xdescribe('makeShortUrl tests', () => {

  // });
  // xdescribe('createJsonResponse tests', () => {

  // });
});
