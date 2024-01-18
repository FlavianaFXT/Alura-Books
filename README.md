# Alura-Books
Projeto desenvolvido durante as aulas de Javascript: Metodos de Array da Alura.


AQUI:

Carregamos o projeto base que vamos usar nesse treinamento;

Realizamos o uma requisição para pegar todos os livros da API de exemplo;

Entendemos que o método forEach é bastante parecido com o for antigo, basicamente faz o mesmo que ele, mas numa forma bem mais elegante;

Exibimos os livros da API manipulando o DOM através do método forEach.

Aprendemos que o método map executa uma função para cada elemento do array e devolve um novo array como resultado;

Aplicamos um desconto através do método map nos preços de cada livro do nosso projeto e entendemos a diferença entre os métodos forEach e map.



## 1 - Preparando o Ambiente


uso do `VSCode` para editar o código e, para tornar o desenvolvimento ainda mais fácil, recomendo a instalação da `extensão do Live Server`.

Para aprofundar nossos conhecimentos na linguagens JavaScript, vamos disponibilizar o [projeto base](https://github.com/alura-cursos/alura_books/archive/refs/heads/projeto_inicial.zip) deste treinamento que está no GitHub.

Feito isto, carregamos o projeto base para começar a trabalhar.


## 2 - ForEach: função para cada Elemento


### Fetch de Livros no console


const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/98d951a2-5efe-4334-8354-78609d44eac6)


### Como funciona o forEach 


`for Each --> Para cada;`

o forEach vai pegar cada elemento de nossa lista e executar uma função para ele.

```bash
livros.forEach(livro => {
console.log(livro);
}
```

### forEach de Livros

[Documentação Oficial forEach](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


## 3 - Map: novo array modificado

### Como funciona o map

Gera um novo array sem alterar o original.

## 4 - Filter: aplicando diferentes filtros







