const express = require('express');
const app = express();
const port = 3000;

// Ruta 1: /  → nombres del equipo
app.get('/', (req, res) => {
  // Cambia estos nombres por los de tu equipo real
  res.send('Integrantes del equipo: Cristhian, Sebastian');
});

// (Puedes borrar esta ruta si ya no la necesitas)
// app.get('/mensaje1', (req, res) => {
//   res.send('Aquí va el mensaje 1. ¡Hola desde Express!');
// });

// Ruta 2: /ulsa → misión de la ULSA
app.get('/ulsa', (req, res) => {
  res.send('La misión de la ULSA Chihuahua es formar integralmente a personas inspiradas en el carisma lasallista y la fe cristiana, para que contribuyan a una sociedad más justa, solidaria y sostenible. Esto lo logra a través de su educación profesional, el desarrollo de competencias, el fomento de valores, la inserción laboral y el cuidado de la Casa Común.');
});

// Ruta 3: /saludar/{nombre}
app.get('/saludar/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

// Iniciar servidor (para pruebas locales)
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
