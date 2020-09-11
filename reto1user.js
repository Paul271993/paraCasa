const mongoose = require("mongoose")

const User = require("./reto1user2")


mongoose.connect("mongodb://localhost:27017/otherDataBase", {useNewUrlParser: true, useUnifiedTopology: true})

// let User = mongoose.Schema;

const usuario = new User({

    login: "peperino",
    password: "egwrgerhehtr",
    name: "Miguelito",
    surname: "Morales",
    dateOfBirth: "27/11/1991",
    comment: "Hola",
    rol: "Curandero",
    age: 43,
    address: "Calle Pinocho, numero 3",
    phone: "670262960",
    email: "mecaguento@gmail.com",
    follow: "Carlos"

})

usuario.save(checkRespuesta)

function checkRespuesta(err, res)
{
    if (err)
    console.log("Error: " + err)
    else{
        console.log("Documento guardado con éxito")
        mongoose.disconnect();
    }
}
module.exports = mongoose.model("User", usuario, "User")
