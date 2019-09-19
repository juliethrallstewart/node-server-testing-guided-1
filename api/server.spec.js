const request = require('supertest');
const server = require('./server.js');

//three ways to deal with testing async;

//using return with a promise
//using async and await
//using 'done'


//whenever making http calls to a server you have to tell jest to return it
describe('server.js', () => {
    describe('GET /', () => {

        //return the promise version 
        it('returns 200 OK', () => {
            //make a GET request to the / endpoint on the server
            //when testing something asynchronous you have to use return so jest
            //understands it's supposed to return a promise

            //you could also use async/await, and then don't have to return
            //by making a function async it just knows it has to wait 
            return request(server).get('/').then(res => {
                 //assert that we get an http status code 200
                expect(res.status).toBe(200)
            })
        })
        // async and await version
        it("should return { api: 'up'}", async () => {
            const res = await request(server).get('/');

            expect(res.body.api).toBe('up');
            expect(res.body).toEqual({ api: 'up'})
        })
        //using done, tells jest to its ready to run the code, can use
        //for dealing with async
        it('returns JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                // assert that we get an http status code 200
                expect(res.type).toMatch(/json/i);
                done()
            })
        })


    })
})



//note DESCRIBE .. just organizes the tests by topic.. it does not affect
//functionality of the tests