let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const User = require('../../models/user')
chai.use(chaiHttp);

const url = 'https://free-lanzate-back.herokuapp.com';

describe('Should register a normal User: ', () => {
    it('should insert an user into the database', (done) => {
        chai.request(url)
            .post('/register')
            .send({
                username: "ihopeto",
                firstName: "Camilo",
                lastName: "Garcia",
                password: "something",
                email: "juan@garcia.com",
                isFreelancer: false
              })
            .end(async function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Should fail creating user: ', () => {
    it('the email field has a validator', (done) => {
        chai.request(url)
            .post('/register')
            .send({
                username: "ihopeto2",
                firstName: "Camilo",
                lastName: "Garcia",
                password: "something",
                email: "juanasdasd",
                isFreelancer: false
              })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).not.to.have.status(200);
                done();
            });
    });
});