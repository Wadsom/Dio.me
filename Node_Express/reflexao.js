const express = require('express');
const app = express();
const {join} = express();



app.get('/', (req, res)=> res.send('Reflexão...!'));
app.listen(5010, ()=>{ console.log('Runnning..... .......++  ')});