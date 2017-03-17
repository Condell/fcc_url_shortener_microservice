import chai from 'chai';
import {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

/* eslint-disable no-unused-expressions */

chai.use(chaiHttp);


describe('Initial server test', () => {
  it('should exist', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
