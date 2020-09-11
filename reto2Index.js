let mongoose = require("mongoose");
let funciones = require("./reto2");
const { url } = require("inspector");

mongoose.connect("mongodb://localhost:27017/otherDataBase", {useNewUrlParser: true, useUnifiedTopology: true})

funciones.crearFoto("Manolito", "dsopgjsdongsdofp", "Foto Manolito", "Hola soy Manolito");
funciones.obtenerFoto("Manolito", "dsopgjsdongsdofp", "Foto Manolito", "Hola soy Manolito");
funciones.seguir();
funciones.dejarDeSeguir();
funciones.borrarUrl();
funciones.borrarFoto();






