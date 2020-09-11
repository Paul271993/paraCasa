const express = require("express");
const mongoose = require("mongoose")
const { response, request } = require("express")
const bodyParser = require("body-parser");
const app = express();
const Photos = require("./reto1");
const User = require("./reto1user2");
const funciones = require("./reto2")
// const funciones = require("./reto2Index")
const { send } = require("process");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/otherDataBase", {useNewUrlParser: true, useUnifiedTopology: true})

// let fotos = []

// let foto = new Photos
//     foto.nombreUsuario = "Pepe";
//     foto.urlFoto = "fasgsdgsadsds";
//     foto.titulo = "Foto de Pepe";
//     foto.descripcion = "Pues nada";





app.get("/fotos/:nombreUsuario", function(request, response){
    

    funciones.obtenerFoto(request.params.nombreUsuario, response)
});



app.post("/fotos", function(request,response)
{ 
    funciones.crearFoto(request.body.nombreUsuario,
        request.body.urlFoto,
        request.body.titulo,
        request.body.descripcion, response)
        
});


app.put("/seguir", function(request, response){
    funciones.seguir(request.body.name, request.body.follow, response)
});

app.put("/dejarDeSeguir", function(request, response){
    funciones.dejarDeSeguir(request.body.name,request.body.follow, response)
})



app.delete("/borrarFoto", function(request,response){
    funciones.borrarUrl(request.body.nombreUsuario, request.body.titulo, response)

})


app.listen(1000);
