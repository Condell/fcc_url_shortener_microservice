import * as RF from 'ramda-fantasy';
// import * as R from 'ramda';
import {
  expect,
} from 'chai';
import {
  connectToDB,
  searchForUrl,
} from './dbOperations';


describe('impure tests', () => {
  describe('connectToDB', () => {
    it('should return a Future', () => {
      expect(connectToDB(process.env.MONGOLAB_URI)).to.be.an.instanceOf(RF.Future);
    });
  });
  describe('searchForUrl', () => {
    it('should return a Future', () => {
      expect(searchForUrl('http://www.google.com')).to.be.an.instanceOf(RF.Future);
    });
  });
});
