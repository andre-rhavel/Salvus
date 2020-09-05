const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/api');

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://rhavel:tDhN8n5hWUa5jCxs@cluster0.l6nc6.gcp.mongodb.net/Salvus?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log('Connectado ao banco de dados: ' + 'Salvus');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});
app.get('/', function (req, res) {
    res.send('END POINT INVÁLIDO!');
});
app.use('/api', routes);
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: ' + port);
});