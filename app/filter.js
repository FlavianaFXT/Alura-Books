const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const eletoBtn = document.getElementById(this.id);
    const categoria = eletoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade> 0) : livros.filter(livro => livro.categoria == categoria);
    
    exibirOsLIvrosNaTela(livrosFiltrados);
}

