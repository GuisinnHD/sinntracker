document.getElementById("buscar").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim(); // Pega o nome de usuário

    if (username === "") {
        alert("Por favor, insira um nome de usuário!");
        return;
    }

    // URL do backend no Render
    const apiUrl = `https://sinntracker.onrender.com/duolingo/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const user = data.users[0]; // Acessa o primeiro (e único) usuário no retorno

            // Exibe as informações do usuário
            const resultHtml = `
                <h2>Perfil do Duolingo - ${user.name}</h2>
                <img src="https:${user.picture}" alt="Imagem de perfil" style="width: 150px; height: 150px; border-radius: 50%;">
                <p><strong>Nome:</strong> ${user.name}</p>
                <p><strong>Nome de usuário:</strong> ${user.username}</p>
                <p><strong>Motivação:</strong> ${user.motivation}</p>
                <p><strong>Streak:</strong> ${user.streak} dias</p>
                <p><strong>XP total:</strong> ${user.totalXp}</p>
                <p><strong>Idiomas aprendendo:</strong></p>
                <ul>
                    ${user.courses.map(course => `<li>${course.title} - XP: ${course.xp} - Crowns: ${course.crowns}</li>`).join('')}
                </ul>
                <p><strong>Data de criação da conta:</strong> ${new Date(user.creationDate * 1000).toLocaleDateString()}</p>
            `;

            // Exibe o conteúdo no HTML
            document.getElementById("resultado").innerHTML = resultHtml;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            document.getElementById("resultado").innerText = "Erro ao buscar dados."; // Exibe mensagem de erro
        });
});
