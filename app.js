const express = require('express');
const bodyParser = require('body-parser');

const usersController = require('./controller/userController');
const loginController = require('./controller/loginController');

const app = express();
app.use(bodyParser.json());


app.post('/cadastro', usersController.createUSers);
app.post('/login', loginController.login);

app.listen(3000, () => console.log(`app rodando na porta ${3000}`));