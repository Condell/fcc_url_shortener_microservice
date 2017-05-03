import * as RF from 'ramda-fantasy';
// import * as R from 'ramda';
import {
  expect,
} from 'chai';
import {
  connectToDB,
  searchDBFor,
} from './dbOperations';


/* eslint-disable no-unused-expressions */


describe('impure tests', () => {
  describe('connectToDB', () => {
    it('should return a Future', () => {
      expect(connectToDB(process.env.MONGOLAB_URI)).to.be.an.instanceOf(RF.Future);
    });
  });
  describe('searchDbFor', () => {
    it('should return JSON containing the original_url if present', (done) => {
      searchDBFor('http://www.google.com').fork(console.error, (result) => {
        expect(result).to.have.property('original_url', 'http://www.google.com');
        done();
      });
    });
    it('should return null if not present', (done) => {
      searchDBFor('invalid').fork(console.error, (result) => {
        expect(result).to.be.null;
        done();
      });
    });
  });
});
