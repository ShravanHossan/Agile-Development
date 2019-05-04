const request = require('supertest');
const assert = require('chai').assert;
const expect = require('chai').expect;
// const db =require.requireActual('../utils');

var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../server');

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

describe('GET /', function () {
    this.timeout(5000);
    it("Main page test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(500);
                done()
            })
    });
});

describe('GET /general_music', function () {
    this.timeout(5000);
    it("General Music test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/general_music')
            .end(function(err, response) {
                console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

describe('GET /latest_music', function () {
    this.timeout(5000);
    it("Latest Music page test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/latest_music')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

describe('GET /create_post', function () {
    this.timeout(5000);
    it("Crete Post test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/create_post')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

describe('GET /signup', function () {
    this.timeout(5000);
    it("Sign up test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/signup')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

describe('GET /confirmsignup', function () {
    this.timeout(5000);
    it("confirm page test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/confirmsignup')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

describe('GET /login', function () {
    this.timeout(5000);
    it("Main page test", function (done) {
        wait(1000);
        chai.request(app)
            .get('/login')
            .end(function(err, response) {
                // console.log(response.text);
                expect(response).to.have.status(200);
                done()
            })
    });
});

// describe('POST /signup_forum', function (){
//     this.timeout(5000);
//     it("Creating user sign up", function (done) {
//         request(app).post('/signup_forum')
//             .send({'fname' : 'Homer',
//                     'lname': 'Simpson',
//                     'email' : 'homer.simpson@gmail.com',
//                     'psw' : 'homersimpson'})
//             .then()
//     })
// })