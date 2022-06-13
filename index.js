const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(`${__dirname}/assets`));

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/assets/index.html`);
});

app.listen(PORT, ()=>console.log(`Aplicação rodando na porta ${PORT}`));