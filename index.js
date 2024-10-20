const express = require('express');
const app = express();
const port = 8080;

// armazena os filmes na memória
let filmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", ano: 1999 },
    { id: 2, titulo: "Mad-Max", diretor: "Feorge Miller", ano: 2015 }
];

// Middleware para interpretar JSON
app.use(express.json());

// Rota GET para obter os filmes
app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});

// Rota POST para adicionar um novo filme
app.post('/api/filmes', (req, res) => {
    const novoFilme = req.body;
    if (!novoFilme.titulo || !novoFilme.diretor || !novoFilme.ano) {
        return res.status(400).json({ error: "Por favor, forneça título, diretor e ano do filme" });
    }
    novoFilme.id = filmes.length + 1; // ID do filme
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}/api/filmes`);
});
