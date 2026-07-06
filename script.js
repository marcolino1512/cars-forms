(function () {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');
    const loginSection = document.getElementById('login-section');
    const cadastroSection = document.getElementById('cadastro-section');
    const showCadastro = document.getElementById('showCadastro');
    const showLogin = document.getElementById('showLogin');

    showCadastro.addEventListener('click', function (e) {
        e.preventDefault();
        loginSection.classList.add('d-none');
        cadastroSection.classList.remove('d-none');
    });

    showLogin.addEventListener('click', function (e) {
        e.preventDefault();
        cadastroSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!loginForm.checkValidity()) {
            loginForm.classList.add('was-validated');
            return;
        }

        loginForm.classList.add('was-validated');
        alert('Login realizado com sucesso!');
    });

    cadastroForm.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!cadastroForm.checkValidity()) {
            cadastroForm.classList.add('was-validated');
            return;
        }

        alert('Cadastro realizado com sucesso!');
        cadastroForm.reset();
        cadastroForm.classList.remove('was-validated');
        cadastroSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
    });
})();
