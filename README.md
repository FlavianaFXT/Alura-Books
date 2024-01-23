# 📖 Alura-Books 📚


Projeto desenvolvido durante as aulas de Javascript: Metodos de Array da Alura, o qual consiste numa página de venda de livros de Programação, nas categorias Front-End, Back-End, Python. 


# INDICE 🗂️

- [APRESENTAÇÃO](#APRESENTAÇÃO)
  - [Quem é Flaviana?](#QUEM-É-FLAVIANA-?)
  - [Contatos](#CONTATOS)
- [DESCRIÇÃO DO PROJETO](#Descrição-Do-Projeto)
  - [Contexto](#Contexto)
  - [Estrutura do Projeto](#Estrutura-do-Projeto)
- [TECNOLOGIAS UTILIZADAS](#Tecnologias-Utilizadas)
- [PASSO A PASSO UTILIZADO](#Passo-A-Passo-Utilizado)
- [FUNCIONALIDADES IMPLEMENTADAS](#Funcionalidades-Implementadas)
- [IMPLEMENTAÇÕES FUTURAS](#Implementações-Futuras)
- [COMO RODAR O PROJETO](#Como-Rodar-O-Projeto)
- [CONFIRA O RESULTADO ](#Confira-O-Resultado)
- [CONTEUDO RELACIONADO](#Conteudo-Relacionado)
  - [1 Preparando o Ambiente](#1-Preparando-o-Ambiente)
  - [2 ForEach função para cada Elemento](#2-ForEach-função-para-cada-Elemento)
  - [3 Map novo array modificado](#3-Map-novo-array-modificado)
  - [4 Filter aplicando diferentes filtros](4-Filter-aplicando-diferentes-filtros)
  - [5 Sort Ordenando a Lista](5-Sort-Ordenando-a-Lista)
  - [6 Reduce um único valor](6-Reduce-um-único-valor)
  - [Outros métodos especiais](Outros-métodos-especiais)
    

# APRESENTAÇÃO 


### Quem é Flaviana? 👱‍♀️


![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/1e13d5e7-b1b4-4701-a689-ec293ec77ea1)

Flaviana Ferraz é uma sertaneja de Pernambuco morando no sertão da Paraiba, formada em Gestão Ambiental e Mestre em Recursos Hídricos. Após mais de 10 anos de formada, aos 34 anos, decidiu fazer transição de carreira. Hoje trilhando persistentemente os caminhos que levam à carreira de FrontEnd Developer.


### Contatos ☎️


- [E-mail](flaviferraz@yahoo.com.br)
- [LinkedIn](https://www.linkedin.com/in/flaviana-ferraz-frontend)
- [GitHub](https://github.com/flavianafxt)


# DESCRIÇÃO DO PROJETO


## 🧠 Contexto


Desenvolvemos as funcionalidades de uma página de venda de livros de programação utilizando os Métodos de Array, JavaScript, utilizando o projeto base da Alura (HTML e CSS - [Veja aqui]((https://github.com/alura-cursos/alura_books/archive/refs/heads/projeto_inicial.zip)))

--------IMAGEM DA PAGINA ---------


## 🧠 Estrutura do projeto 🚧


### Páginas do Projeto


O projeto é composto por uma única página, que renderiza livros de formas diferentes, de acordo com o botão clicado.


### Estrutura de Pastas 📁


Nosso projeto contém os arquivos HTML e CSS base, e uma pasta chamada `App` com os arquivos Javascript, conforme observa-se na imagem abaixo:


![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/c035a1ae-6cef-4314-b9d2-54551645f9fa)


# TECNOLOGIAS UTILIZADAS 👩‍💻


| Ferramenta | Descrição |
| --- | --- |
| `Javascript` | linguagem de programação|
| `métodos de array` | método utilizado na linguagem Javascript para consumo de API|
| `VS Code` | Editor de Código |
| `Git` | Gerenciador de vercionamento|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|
| `----` | deploy do projeto|


# PASSO A PASSO UTILIZADO *️⃣


1️⃣ Carregamos o [projeto base]((https://github.com/alura-cursos/alura_books/archive/refs/heads/projeto_inicial.zip));


2️⃣ Realizamos uma requisição para pegar todos os livros da API de exemplo;

3️⃣ Exibimos os livros da API manipulando o `DOM` através do método `forEach`;

4️⃣ Aplicamos um desconto através do método `map` nos preços de cada livro do nosso projeto e entendemos a diferença entre os métodos forEach e map;

5️⃣ Atribuímos um evento de click no botão para filtrar os livros por categoria através do `filter`;

6️⃣ Exibimos os livros filtrados por categoria e que estejam disponíveis;

7️⃣ Ordenamos os livros da aplicação por preço utilizando o `sort`;

8️⃣ Melhoramos a experiência do usuário da aplicação, aplicando uma opacidade nos livros indisponíveis.

9️⃣ Manipulamos o DOM para exibir a sessão de valor total dos livros disponíveis apenas quando o botão de filtrar livros disponíveis for clicado;

🔟 Utilizamos o método `reduce` para descobrir o valor total de todos livros disponíveis.


# FUNCIONALIDADES IMPLEMENTADAS 📎


✔️ Consumo de APi e renderização dos livros em tela com seus principais dados;

✔️ Aplicação de desconto nos livros;

✔️ Funcionalidade do botão que filtra os livros por categoria;

✔️ Exibição em tela dos livros por categoria e disponíveis ao clicar o botão;

✔️ Ordenamento dos livros por preço;

✔️ Opacidade automática em livros não disponíveis;

✔️ Sessão de valor total dos livros disponíveis quando o botão de filtrar livros disponíveis for clicado;

✔️ Valor total dos livros disponíveis somando-se seus valores automaticamente.


#  IMPLEMENTAÇÕES FUTURAS


-[ ✖️ ] 


# COMO RODAR O PROJETO: 


Para rodar esse projeto em sua máquina, siga os passos a seguir:


1️⃣ Realize o fork desse repositorio

2️⃣ Clone na sua máquina

3️⃣ Entre no diretório do repositorio clonado

4️⃣  no arquivo `index.html`, clique com o direito do mouse e em `Abrir com Live Server`. O projeto vai ser aberto automaticamente no navegador.


# CONFIRA O RESULTADO [AQUI]()



# CONTEUDO RELACIONADO



## 1 Preparando o Ambiente



Usamos o `VSCode` para editar o código e, para tornar o desenvolvimento ainda mais fácil, instalamos a `extensão do Live Server`.

Feito isto, carregamos o [projeto base](https://github.com/alura-cursos/alura_books/archive/refs/heads/projeto_inicial.zip) para começar a trabalhar.



## 2 ForEach função para cada Elemento



### Fetch de Livros no console



`const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'`


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



## 3 Map novo array modificado



### Como funciona o map



Gera um novo array sem alterar o original.



## 4 Filter aplicando diferentes filtros



### Filter 



Temos um array e queremos filtrar criando um novo array.



### Como funciona o método Filter



### Filter de Livros



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/1f1269fd-8a04-4f2a-8de7-78f7317f1a0d)



### Livros Filtrados na Tela



## 5 Sort Ordenando a Lista



### Como funciona o Sort



Ordena os elementos de um array.


Exemplo:



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/fa3b2792-529a-488d-8034-04455c1ad41b)



ou



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/a64a06d0-5a8d-4885-9520-83112889cae8)



Para ordenar do menor para o maior.

Para ordenar do maior para o menor é só utiizar: `b-a`



### Sort de livros



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/522b1d2c-2aec-4e7d-9c63-57d0f5d694d3)



### Livros indisponíveis



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/3117b985-4975-425c-9fb4-663df9ca80ca)



### Filtrando livros disponíveis



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/4ff682d3-8e9d-4bfb-86df-6129dab94475)



OBS: O método sort converte elementos em strings e realiza a comparação ordenando de acordo com a pontuação de código Unicode. Observe que método sort coloca o 10 e o 100 antes de 2 porque a string “10” vem antes de “2” ao fazer uma comparação de strings. O mesmo acontece na ordenação da variável p onde as letras maiusculas são ordenadas primeiros que as letras minúsculas.



## 6 Reduce: um único valor



### Manipulando HTML com JS



### Como funciona o Reduce



com esse método reduzimos o nosso array a um elemento só

combinar dois valores ou mais e gerar um unico valor 



![image](https://github.com/FlavianaFXT/Alura-Books/assets/113718720/a5629d0a-095a-434a-b5f4-c438e4ba2d77)



### Outros métodos especiais



`Guia do Mochileiro JavaScript`



Método `.concat( )`


[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]

O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.



Método `.pop( )`


[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop( ) => [🏀 , 🏀 , 🏀, 🏀]

O método pop remove o último elemento de um array.



Método `.push( )`


[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]

O método push adiciona um novo elemento no final do array, aumentando seu tamanho.



Método `.includes()`


[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true

O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.



Método `.fill( )`


[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽, 1 ) => [ ⚾ , ⚽, ⚽, 🏀 ] [ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽ ) => [ ⚽, ⚽, ⚽, ⚽ ]

O método fill preenche os elementos especificados em um array com um determinado valor.



Método `.indexOf( )`


[ ⚾ , 🏈, ⚽, 🏀, ⚽ ].indexOf( ⚽ ) => 2

O método indexOf retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado o método retorna -1.



Método `.reverse( )`


[ ⚾ ,🏈, ⚽, 🏀 ].reverse( ) => [🏀, ⚽,🏈, ⚾]

O método reverse inverte a ordem dos elementos de um array e substitui o array original.



Método `.slice( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].slice( 1, 3 ) => [ 🏈, ⚽ ]

O método slice retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.



Método `.some( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].some( ( 🏐 ) ⇒ { return bola === 🏐 } ) => true

O método some verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.



Método `.join( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join() ⇒ ⚾,🏈,⚽,🏀,🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘ ’) ⇒ ⚾🏈⚽🏀🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘-’) ⇒ ⚾-🏈-⚽-🏀-🏐

O método join puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.



Método `.shift( )`


[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]

O método shift é parecido com o método .pop() mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.



Método `.unshift( )`


[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]

O método unshift é parecido com o que método .push() realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.



Método `.splice( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]

Com o método splice conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.



Método `.length( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length(3) ⇒ ⚾ , 🏈, ⚽ [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length() ⇒ 5

O método length define ou retorna o número de elementos em um array.



Método `.sort( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].sort() ⇒ ⚽,⚾,🏀,🏈,🏐

O método sort ordena os elementos do próprio array e retorna o array. A ordenação padrão é de acordo com a pontuação de código unicode.



Método `.toString( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].toString ⇒ ⚾,🏈,⚽,🏀,🏐

O método toString retorna uma string com todos os valores do array separados por vírgulas.



Método `.findIndex( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].findIndex(emoji => emoji === “⚽”) ⇒ 2

O método findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.



Método `.find( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].find( bola ⇒ bola.formato === “redonda” ) => ⚾

O método find é utilizado para procurar um elemento dentro do array que atenda a condição atribuída a ele, que retornará o primeiro elemento encontrado. Ele percorre todo o array buscando o elemento que atenda a condição e retorna o primeiro que foi encontrado, caso não encontre retorna undefined. Este método não executa caso o array esteja vazio e não altera o array original



Método `.at( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(-1) ⇒ 🏐 / [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(1) ⇒ 🏈

O at acessar os elementos de um array usando um índice inteiro positivo e negativo, sendo que o índice negativo enumera os itens de trás para frente, portando o 🏐 está posicionado no índice -1.



Método `.isArray( )`


var bolas = [ ⚾ , 🏈, ⚽, 🏀, 🏐 ] Array.isArray(bolas) ⇒ true

O método Array.isArray verifica se a variável é um array e retorna true ou false.



Método `.every( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].every( ( bola ) ⇒ { return bola === 🏐 } ) => false

O método every verifica se cada elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para todos os elementos, e false se o teste for false para pelo menos um elemento. Além disso, o método não executa a função callback para arrays vazios e não altera o array.



Método `.filter( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].filter( ( bola ) ⇒ { return bola !== 🏈 } ) => [ ⚾, ⚽, 🏀, 🏐 ]

O método filter usa uma função callback de teste e executa ela para cada elemento do array. Ele retorna um novo array com os elementos que passarem no teste.



Método `.map( )`


[🏀, 🏀,🏀,🏀 ].map( console.log(( bola ) ⇒ { return 🏈 }) ) => [ 🏈, 🏈, 🏈, 🏈 ]

O método map usa uma função callback de teste e executa ela para cada elemento do array, retornando um novo array modificado. Não executa a função de callback para arrays vazios.



Método `.forEach( )`


[🏀, 🏀,🏀,🏀 ].forEach( ( bola ) ⇒ { console.log( bola + ⚽)} ) => 🏀⚽🏀⚽🏀⚽

O método forEach usa uma função callback e executa ela para cada elemento do array. Não executa a função de callback para arrays vazios e não retorna um novo array, diferente do método map.



Método `.copyWithin( )`


[ ⚾ , 🏈, ⚽, 🏀 ].copyWithin(2,0) ⇒ [ ⚾ , 🏈, ⚾ , 🏈 ]

O método copyWithin copia os elementos do array para outra posição no array, ele não adiciona itens apenas substitui os valores existentes.



Método `.lastIndexOf( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].lastIndexOf(⚽) ⇒ 2

O método lastIndexOf retorna o valor do último índice especificado, se o valor não for encontrado ele retorna -1.



Método `.valueOf( )`


[ ⚽, ⚾ , 🏀, 🏐 ].valueOf() ⇒ [ ⚽, ⚾ , 🏀, 🏐 ]

O método valueOf é usado para retornar o array. É um método padrão do objeto Array. Este método retorna todos os itens na mesma matriz. Ele não altera o conteúdo original da matriz e não contém nenhum valor de parâmetro.



Método `.reduce( )`


[ 🥦, 🍅, 🥕, 🍆 ].reduce((valor, elemento) => valor + elemento, 0)) ⇒ 🥗

O método reduce executa uma função redutora para o elemento array, ele retorna um único valor que é o resultado acumulado da função. Ele não executa a função para elementos de array vazios e não altera a matriz original.



Método `.keys( )`


[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]

O método keys retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado.
