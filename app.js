const express = require("express");
//1. Crear la aplicación (server)
const app = express();

app.get("/", (req, res) => {
    res.send("Server Héroes Versión 1.0.0");
});

app.listen(8088, ()=>{
    console.log("El servidor está activo por el puerto 8088")
})