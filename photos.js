const mongoose = require("mongoose");
const Photos = require("./reto1");


mongoose.connect("mongodb://localhost:27017/otherDataBase", {useNewUrlParser: true, useUnifiedTopology: true})



let fotos = new Photos({
    nombreUsuario: "Pablo",
    urlFoto: "jdsojgsdijroajvif",
    titulo: "Foto Pablo",
    descripcion: "Aquí con los panas"
})

fotos.save(checkRespuesta);


function checkRespuesta(err, res)
{
    if (err)
    console.log("Error: " + err)
    else{
        console.log("Documento guardado con éxito")
        mongoose.disconnect();
    }
}


