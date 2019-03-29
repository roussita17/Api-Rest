const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//contectnaod a la bd
mongoose.connect('mongodb://localhost/Catalago-mongo')
 .then(db => console.log('Db conected'))
.catch(err => console.log(err));

//importacion de la rutas 
const indexRoutes = require('./routes/index');

//configuraciones adicionales
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', '.ejs');

//middlewares de express
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false }));

//rutas 
app.use('/', indexRoutes);

//Inicializador de servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
