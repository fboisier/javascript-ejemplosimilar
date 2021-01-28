
const express = require("express");
const app = express();
const port = 8000;

//    aqui van las configuraciones (los get, use, post, 
//    configuracion de carpeta estaticas (punto 8), etc.)
app.use(express.static(__dirname + "/public"));
// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views'); 
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');


const peliculas = [
    { 
        codigo: "star",
        nombre: "Star Wars", 
        poster: "star_wars.jpg", 
        anio:2010, 
        protagonista: "Daisy Ridley", 
        cateogira: ["Acción", "Fantasia"] 
    },
    { 
        codigo:"fish",
        nombre: "Big Fish", 
        poster: "big_fish.jpg", 
        anio:2005, 
        protagonista: "Ewan Mcgregor", 
        cateogira: ["Comedia","Drama", "Fantasia"] 
    },
    { 
        codigo: "gump",
        nombre: "Forrest Gump", 
        poster: "forrest_gump.jpg", 
        anio:2000, 
        protagonista: "Tom Hanks", 
        cateogira: ["Drama", "Comedia"] 
    }
]

app.get("/peliculas", (req,res)=>{

    console.log(peliculas);

    res.render("peliculas", { peliculas : peliculas });

});

app.get("/:codigo", (req,res)=>{

    console.log(req.params.codigo);

    // BUSCAR con CODIGO la pelicula que tenga dentro el codigo solicitado en el ARRAY peliculas.
    // pasar la pelicula a la vista.
    // editar la vista para que muestre los datos enviados. 

    res.render("detalle");

});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

