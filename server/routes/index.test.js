import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


/* eslint-disable no-unused-expressions */


chai.use(chaiHttp);


describe('index.js tests', () => {
  describe('/ GET test', () => {
    it('should exist', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/0 GET test', () => {
    it('should exist', (done) => {
      chai.request(app)
        .get('/0')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
