document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente carregado e analisado");
    
    const loginForm = document.getElementById('form-login');
    const content = document.getElementById('content');
    const loginDiv = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log("Formulário submetido");
        console.log("Usuário:", username);
        console.log("Senha:", password);

        // Para fins de demonstração, qualquer combinação de usuário e senha é aceita
        // Em uma aplicação real, você deve validar essas credenciais no servidor
        if (username && password) {
            console.log("Credenciais válidas. Exibindo conteúdo.");
            loginDiv.style.display = 'none';
            content.style.display = 'block';
        } else {
            console.log("Credenciais inválidas. Exibindo alerta.");
            alert('Por favor, preencha os campos de usuário e senha.');
        }
    });
});