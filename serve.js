const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');
const cors = require('cors');

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/meuBancoDeDados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexão com MongoDB estabelecida com sucesso'))
.catch(err => console.error('Erro na conexão com MongoDB:', err));

// Inicialização do Express
const app = express();

// Middleware para permitir o parsing de JSON
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicialização do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
