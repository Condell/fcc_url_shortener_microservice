import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


/* eslint-disable no-unused-expressions */


chai.use(chaiHttp);


describe('newUrl.js tests', () => {
  describe('/new GET test', () => {
    it('should exist', (done) => {
      chai.request(app)
        .get('/new')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
