const mongoose = require("mongoose");

let User = mongoose.Schema

const usuario = new User({
    login: String,
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 6;
            },
            "Password debería contener mínimo de 6 caracteres"]

    },
    name: String,
    surname: String,
    dateOfBirth: String,
    comment: String,
    rol: String,
    age:{
        type: Number,
        min: 18,
        max:50
    },
    address: String,
    phone: {
        type: String,
        validate: [
            function(phone){
                return phone.length === 9;
            },
            "Phone incorrecto"]
    },
    email: String,
    follow: String


})


usuario.pre("save", function(next)
    {
        console.log("Middleware de entrada");
        if (this.age > 18 && this.age < 50)
        {
            console.log("Edad aceptada")
            next();
        }
        else
        console.log("Edad incorrecta")
    })


module.exports = mongoose.model("User", usuario, "User")