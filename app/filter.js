const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const eletoBtn = document.getElementById(this.id);
    const categoria = eletoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLIvrosNaTela(livrosFiltrados);
}

