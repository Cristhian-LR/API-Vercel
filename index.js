const express = require("express");
const app = express();

// RUTA /
app.get("/", (req, res) => {
  res.send("Integrantes: Adri, Nombre 2, Nombre 3");
});

// RUTA /ulsa
app.get("/ulsa", (req, res) => {
  const mision = "La misión de la ULSA Chihuahua es formar integralmente a personas inspiradas en el carisma lasallista y la fe cristiana, para que contribuyan a una sociedad más justa, solidaria y sostenible. Esto lo logra a través de su educación profesional, el desarrollo de competencias, el fomento de valores, la inserción laboral y el cuidado de la Casa Común.";
  res.send(mision);
});

// RUTA /saludar/:nombre
app.get("/saludar/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.send(`Hola ${nombre}`);
});

// Para desarrollo local
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("Servidor local en puerto " + port));
}

// Para Vercel
module.exports = (req, res) => {
  app(req, res);
};