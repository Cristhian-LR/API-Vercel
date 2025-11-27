const express = require('express');
const app = express();
const port = 3000;

// Ruta 1
app.get('/', (req, res) => {
  res.send('Bienvenidos al API');
});

// Ruta 2
app.get('/mensaje1', (req, res) => {
  res.send('Aquí va el mensaje 1. ¡Hola desde Express!');
});

// Ruta 2
app.get('/ulsa', (req, res) => {
  res.send('La misión de la ULSA Chihuahua es formar integralmente a personas inspiradas en el carisma lasallista y la fe cristiana, para que contribuyan a una sociedad más justa, solidaria y sostenible. Esto lo logra a través de su educación profesional, el desarrollo de competencias, el fomento de valores, la inserción laboral y el cuidado de la Casa Común. ');
});
// Ruta 3
app.get('/saludar/:msg', (req, res) => {
  res.send(`Hola: ${req.params.msg} ߘ`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});