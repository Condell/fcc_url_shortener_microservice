import {
  expect,
} from 'chai';
import {
  isValidUrlQueryString,
  saveFinalUrlsToDatabase,
  generateRandomNumber,
  createFinalUrls,
  // notValidUrl,
  // makeShortUrl,
  // createJsonResponse
} from './modifyURL';


/* eslint-disable no-unused-expressions */


describe('modifyURL tests', () => {
  const valid = 'http://www.google.com';
  const invalid = 'google';
  describe('isValidUrlQueryString tests', () => {
    it('should return true when provided a valid URL', () => {
      expect(isValidUrlQueryString(valid)).to.be.true;
    });
    it('should return false when provided an invalid URL', () => {
      expect(isValidUrlQueryString(invalid)).to.be.false;
    });
  });

  describe('createFinalUrls tests', () => {
    it('should return an object containing short and long urls', () => {
      expect(createFinalUrls()).to.be.true;
    });
  });

  describe('generateRandomNumber tests', () => {
    it('should return a random number between 0 and 999', () => {
      // change expect statement
      expect(generateRandomNumber()).to.exist;
    });
  });

    xdescribe('saveFinalUrlsToDatabase tests', () => {
    it('should save json to database', () => {
      expect(saveFinalUrlsToDatabase(valid)).to.exist;
    });
  });
  // xdescribe('makeShortUrl tests', () => {

  // });
  // xdescribe('createJsonResponse tests', () => {

  // });
});
