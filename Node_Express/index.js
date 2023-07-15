const express = require('express');
const BodyParse = require('body-parser');
const app = express();
const USERROUTE = require('./Router/UsersRouters');
const Port = 7060;
USERROUTE(app);

app.use(BodyParse.urlencoded({ extended: false}));
app.get('/',  (req, res) => res.send('Sucesso em Express!!! ||| Pode continuar!!'));
app.listen(Port, ()=> {console.log(`Runninng...!!! | Porta: ${Port}`)});