const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
// Informa para aplicação a permissão para enviar formatos do tipo json
app.use(express.json());
// Configuração de acesso dos domínios
app.use(cors()); // Desta forma esta liberando para ser acessado publicamente

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Registrando o model
requireDir('./src/models/');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);