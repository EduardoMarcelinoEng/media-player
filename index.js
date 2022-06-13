const express = require('express');
const app = express();
const port = 80;

app.use(express.static(`${__dirname}/assets`));

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/assets/index.html`);
});

app.listen(port, ()=>console.log(`Aplicação rodando na porta ${port}`));