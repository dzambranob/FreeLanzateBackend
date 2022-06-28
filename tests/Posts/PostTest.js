let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:8000';

describe('Insert a Post: ', () => {
    it('should insert a post', (done) => {
        chai.request(url)
            .post('/post/create')
            .send({
                postTitle: "Titulo post Test",
                freelancerId: 1,
                postDescription: "Description",
                postPrice: 10000,
                postCategory: 1,
                thumbnailUrl: "google.com",
                adPriority: 10
              })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Fail Inserting a Post: ', () => {
    it('shouldnt insert a post', (done) => {
        chai.request(url)
            .post('/post/create')
            .send({
                postTitle: "Titulo test null",
                freelancerId: null,
                postDescription: "Description",
                postPrice: 10000,
                postCategory: 1,
                thumbnailUrl: "google.com",
                adPriority: 10
              })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(500);
                done();
            });
    });
});