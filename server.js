document.getElementById("buscar").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim(); // Pega o nome de usuário

    if (username === "") {
        alert("Por favor, insira um nome de usuário!");
        return;
    }

    const apiUrl = `https://sinntracker.onrender.com/duolingo/${username}`; // URL do seu backend no Render

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Exibe os dados no console
            document.getElementById("resultado").innerText = JSON.stringify(data, null, 2); // Exibe os dados no HTML
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            document.getElementById("resultado").innerText = "Erro ao buscar dados."; // Exibe mensagem de erro
        });
});
