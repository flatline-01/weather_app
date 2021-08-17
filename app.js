const express= require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const routers = require('./routers');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routers);

app.listen(4000);