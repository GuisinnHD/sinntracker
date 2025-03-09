const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simulação de dados que você obteria da API do Duolingo
const getDuolingoData = (username) => {
    return {
        users: [
            {
                username: username,
                name: "Guilherme ⚡️",
                streak: 321,
                motivation: "travel",
                totalXp: 16312,
                picture: "//simg-ssl.duolingo.com/ssr-avatars/1438369258/SSR-9sXmVGCcBz",
                courses: [
                    { title: "Japanese", xp: 3733, crowns: 9999 },
                    { title: "English", xp: 9101, crowns: 9999 },
                    { title: "Korean", xp: 3478, crowns: 9999 }
                ]
            }
        ]
    };
};

// Rota para buscar informações de um perfil do Duolingo
app.get('/duolingo/:username', (req, res) => {
    const username = req.params.username;

    // Simula a busca de dados do Duolingo
    const userData = getDuolingoData(username);

    // Retorna os dados como JSON
    res.json(userData);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
