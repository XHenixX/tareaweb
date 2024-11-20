const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let contactos = [];
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

let contactos = [];

app.get('/api/contactos', (req, res) => {
  res.json(contactos);
});

app.post('/api/contactos', (req, res) => {
  const { nombre, telefono } = req.body;

  if (!nombre || !telefono) {
    return res.status(400).json({ error: 'Nombre y teléfono son requeridos' });
  }

  const nuevoContacto = { nombre, telefono };
  contactos.push(nuevoContacto);

  res.status(201).json(nuevoContacto);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
