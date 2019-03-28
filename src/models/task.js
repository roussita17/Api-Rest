const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatalagoSchema = new Schema ({
    nombre : String,
    raza: String,
    edad : Number,
    sexo : String
});

module.exports = mongoose.model('catalago', CatalagoSchema);