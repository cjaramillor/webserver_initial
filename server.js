const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
var hbs = require('hbs');
const helper = require("./hbs/helpers.js");
app.use(express.static(__dirname + "/public"));


//parciales HBS
hbs.registerPartials(__dirname + '/views/partials');

//express HBS engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render("home", {
        "nombre": "cristian",
        "anio": new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {

    res.render("about");

    /*
    let out = {
        "nro_salida": "salida 2",
        "Nombre": "Cristian Jaramillo",
        "Edad": 24,
        "Estado": "Casado"
    }

    //salida siempre sale en string por lo que si 
    //la response es un objeto se transforma a json
    res.send(JSON.stringify(out))
    */
})


app.listen(port, () => {
    console.log("listen to port 3000");
});