
// Métodos de Array - map, filter, every, some, find, findIndex, reduce.

const array = [1 ,2, 3, 4, 5];


/* 
Método Filter
O filter n pode alterar os valores, ele so filtra os vetores.


const novoArray = array.filter(item => item % 2 == 0);

-------------------------------------

usando .filter e .map 

const novoArray = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 15)

-------------------------------------

método .every  
condição se todos os valores do array são números ( true ou false )

duas maneiras de usar

const todosItensSaoNumeros = array.every(item => typeof item == 'number');

const todosItensSaoNumeros = array.every(item => {
  return typeof item == 'number'});

------------------------------------

método .some
condição de pelomenos um dos arrays obter 

const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item !== 'number';
})

----------------------------------- 

método .find 
condição de encontrar o item do array 
ex: primeiro numero par do array 
se n tiver nenhum valor ele retorna undefined* 

const par = array.find(item => item % 2 == 0);

-----------------------------------

método findIndex é igual porém ele vai retornar o índice do valor que a condição exigir 
ex : retornar o valor par do array que está no índice 1 

const par = array.findIndex(item => item % 2 == 0);

-----------------------------------

método .reduce 
muito utilizado quando queremos pegar o array e criar uma nova estrutura de dados (criar algo novo)
restruturação do array*

ex : fazendo a soma dos array = 15 

valor inicial = 0
objeto que está criando = acc (accumulator)
cada info do array = item

valor do accumulator, o item do array e undefined 
deu undefined porq o acc espera um novo valor a cada iteração (return acc;)
e para fazer a soma a cada valor (acc + item;) 
e declarar a variável para o resultado 
*/


const soma = array.reduce((acc, item) => {
  document.body.innerText += acc + ',' + item + '---';

  return acc + item;
}, 0)


document.body.innerText = JSON.stringify(soma);




/*
métodos
map, filter, every, some, find, findIndex, reduce.
*/



// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







