const request = require('supertest');
const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

//how to check a value on the environment: 

//process.env.Node_ENV

// you want a different test database so you can have a predictable database
//so you are not testing against variations of data in production or development

//this code asserts you are testing against the correct db, testing

//the before each will clean out the table each time you run the code
//so the data is consistent
describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    })


    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('insert()', () => {
        it('should insert hobbits record into the db', async () => {
            //insert a record
            await Hobbits.insert({name: 'Gaffer'});
            await Hobbits.insert({name: 'Gaffer'});

            let hobbits = await db('hobbits')

            //assert the record was inserted
            expect(hobbits).toHaveLength(2)
        })

        it('should insert hobbits record into the db', async () => {
            //insert a record
            const [id] = await Hobbits.insert({name: 'Gaffer'});
            console.log(id)

            let hobbit = await db('hobbits').where({id}).first()

            //assert the record was inserted
            expect(hobbit.name).toBe('Gaffer')
        })
    })
})

//async and await.. says this code returns a promise, don't give me back
//anything until the promise resolves