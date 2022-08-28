const assert = require('assert');
const Greet = require('../greetings');
const pgPromise = require('pg-promise');
const greetings = require('../greetings');

const pgp = pgPromise({})

const local_database_url = 'postgres://mxo:mxo123@localhost:5432/my_greet';
const connectionString = local_database_url;


const db = pgp(connectionString);

 const greeted = greetings(db)

describe("DataBase test cases", async function () {

    beforeEach(async function(){
        await db.none('delete from my_greet where id >=1')
    });
     
    
    it("Delete from database when clear names pressed", async function () {
        
        await greeted.greet2("Mxolisi")
        await greeted.clearNames()
        assert.deepEqual( [] , await greeted.listofNames())
        
    });
     
    it("Should keep count on how times name greeted", async function () {

        await greeted.greet2("Mxolisi");
        var personcounter = await greeted.userCounter("Mxolisi") ;
        assert.equal(1, personcounter.counter)
    });
    

    it("Return how many names have been greeted", async function () {
    
        await greeted.greet2("Jack");
        await greeted.greet2("Mark");
        await greeted.greet2("Bill");

        assert.deepEqual( 3
          , await greeted.countNames())
    });


    it("SHow name in database", async function () {
        
        await greeted.greet2("Jack");
        assert.deepEqual([ { greeted_names: 'Jack' }]
        , await greeted.listofNames())
        
    });


    after(async function () {
        await db.manyOrNone('Truncate my_greet');
    });
})