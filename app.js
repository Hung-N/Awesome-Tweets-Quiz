const express = require('express');
const logger = require('morgan');
const home = require('./routes/home')
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');



const app = express();



app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/', home);



const PORT = 4000;
app.listen(PORT, () => { console.log(`💻 Server listening on http://localhost:${PORT}`)})
