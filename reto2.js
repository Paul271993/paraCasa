const mongoose = require("mongoose")
const Photos = require("./reto1")
const User = require("./reto1user2")
const { response } = require("express")
const { url } = require("inspector")
mongoose.connect("mongodb://localhost:27017/otherDataBase", {useNewUrlParser: true, useUnifiedTopology: true})





function crearFoto(nombreUsuario,urlFoto,titulo,descripcion, response){

    let usuario = new Photos({
        nombreUsuario: nombreUsuario,
        urlFoto: urlFoto,
        titulo: titulo,
        descripcion: descripcion

    })

    usuario.save(function(err, res){
        if (err) 
        console.log("Error: " + err)
        else{
            console.log("Foto subida correctamente" + res)
            // console.log(res);
            response.send(res);
            mongoose.disconnect();
        }
    })
}


function obtenerFoto(nombreUsuario, response){

    Photos.find({nombreUsuario: nombreUsuario},
        function(err, res)
        {
            if (err)
                console.log("Error");
            else
            {
                console.log("Foto obtenida" + res);
                response.send(res);
            // mongoose.disconnect();
            }
        });
};


function seguir(nombre,seguidor,response){
    // let user = new User({
    //     name:name,
    //     follow:follow

    // })

    User.updateOne({name: nombre}, {follow: seguidor},
           function(err, res)
           {
               if (err)
               console.log("Error");
               else{
            //    console.log(res)
               response.send(res)
            //    mongoose.disconnect();
               }
           }
    )   
}

function dejarDeSeguir(nombre,seguidor,response){
   

    User.updateOne({name: nombre}, {follow: null},
           function(err, res)
           {
               if (err)
               console.log("Error");
               else
            //    console.log(res)
               response.send(res)
            //    mongoose.disconnect();
           }
    )   
}


function borrarUrl(nombre,title,response){
    // let foto = new Photos({
    //     nombreUsuario:nombreUsuario,
    //     titulo:titulo,
    //     urlFoto:urlFoto

    // })

    Photos.findOneAndDelete({nombreUsuario: nombre, titulo: title}, 
           function(err, res)
           {
               if (err)
               console.log("Error");
               else
               {
            //    console.log(res)
               response.send(res)
            //    mongoose.disconnect();
               }
           }
    )   
}


function borrarFoto(nombreUsuario){
    let foto = new Photos({
        nombreUsuario:nombreUsuario
    })
    Photos.findOneAndDelete({nombreUsuario: "Mierder"},

       function(err,res)
       {
           if (err)
           console.log("Error");
           else
           console.log(res)
           mongoose.disconnect();
       }
    )

}


module.exports = {crearFoto,obtenerFoto,seguir,dejarDeSeguir,borrarUrl,borrarFoto}






