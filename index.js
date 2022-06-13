const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/assets`));

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/assets/index.html`);
});

app.listen(3000, ()=>console.log('Aplicação rodando na porta 3000'));