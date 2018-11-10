const express = require('express');
const bodyParser = require('body-parser');
const dbusers = require('./db/db');
const mongo = require('./db/dbconnection')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routePets = require('./routes/pets') (app);

mongo.conectar(app);