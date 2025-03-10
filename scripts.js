<script>
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;

    // Verifica se o tema está salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Adiciona o ouvinte de clique para o botão de alternar tema
    themeToggleButton.addEventListener('click', () => {
        // Alterna a classe de tema
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        // Salva a preferência do tema no localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', 'light-theme');
        }
    });
</script>
