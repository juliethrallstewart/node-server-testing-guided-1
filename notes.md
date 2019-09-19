## Jest testing

you do not need to have your server running when testing, the jest library
start the server run the tests then disconnect it server for you 

## Dependencies

npm install supertest

## package.json

  "scripts": {
    "server": "nodemon index.js",
    "test": "cross-env DB_ENV=testing jest --watch",
    "start": "node index.js"
  },

## configuration

npx jest --init

answers in terminal:

no, no, node, no

## jest.config.js

confirm: 

  // The test environment that will be used for testing
  testEnvironment: "node",


## dealing with async code in testing

- return with a promise
- async and await
- done()

## postgres

npm i pg

## heroku

on heroku site: 
in the app homepage, go to resources, select heroku postgres & accept(provision)


//to run migrations to production on postgres, vs say sqlite3 which is development
npx heroku run knex migrate:latest -a nameOnHerokuOfApp

### To see logs on heroku

heroku logs -a app-shouts --tail (app name is whatever you named it on heroku)

## to config production with heroku/postgres

npm i pg
add the production config for pg into knex file

- on your deplyed heroku site: 
in the app homepage, go to resources, select heroku postgres & accept(provision)


- to run migrations to production on postgres, vs say sqlite3 which is development
npx heroku run knex migrate:latest -a nameOnHerokuOfApp 