const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simulação de dados que você obteria da API do Duolingo
const getDuolingoData = (username) => {
    // Simulação de dados de um perfil do Duolingo
    if (username === 'Guisinn') {
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
    } else {
        // Retorna um erro se o usuário não for encontrado
        return { error: "Usuário não encontrado!" };
    }
};

// Rota para buscar informações de um perfil do Duolingo
app.get('/duolingo/:username', (req, res) => {
    const username = req.params.username;
    const userData = getDuolingoData(username);

    // Verifica se existe o erro (caso o usuário não exista)
    if (userData.error) {
        return res.status(404).json(userData);
    }

    // Retorna os dados como JSON
    res.json(userData);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
