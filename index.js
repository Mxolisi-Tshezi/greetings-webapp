const session = require('express-session');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const express = require("express");
const greet = require ('./routes/routes');
const Greeting = require ('./greetFact');
const greet1 = require ('./greetings');

const pgp = require('pg-promise')({});

const local_database_url = 'postgres://mxolisi:mxolisi123@localhost:5432/greeted_users';
const connectionString = process.env.DATABASE_URL || local_database_url;

const config ={
  connectionString 
}

if(process.env.NODE_ENV == "production"){
  config.ssl = {
      rejectUnauthorized: false
  }
}
const db = pgp(config);

const greeter = greet1(db);
const greetRoot = Greeting();
const Router = greet(greeter,greetRoot);

const app = express();

app.use(session({
  secret: "<add a secret string here>",
  resave: false,
  saveUninitialized: true
}));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", Router.home);
app.post("/greet",Router.greets);
app.get("/clear",Router.clear)
app.get('/greeted',Router.greeted);
app.get("/counter/:name",Router.counter); 

const PORT = process.env.PORT || 3008;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});