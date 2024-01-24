const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/home/home.html'));
});

app.get('/vendas',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/vendas/vendas.html'));
});


app.get('/caixa',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/caixa/caixa.html'));
});

app.get('/estoque',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/estoque/estoque.html'));
});
