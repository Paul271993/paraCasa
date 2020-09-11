const mongoose = require("mongoose");



let Photos = mongoose.Schema;

const photoSchema = new Photos({
    nombreUsuario: String,
    urlFoto: String,
    titulo: String,
    descripcion: String
})

module.exports = mongoose.model("Photos", photoSchema, "Photos");