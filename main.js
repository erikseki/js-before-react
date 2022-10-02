
// Métodos de Array - map, filter, every, some, find, findIndex, reduce.

const array = [1 ,2, 3, 4, 5];


/* FORMAS DE PERCORRER O ARRAY (for, forEach & map); 

for (const i of array){
  document.body.innerText += i;
}

array.forEach(item => {
  document.body.innerText += item;
})

-----------------------------------

A diferença do .map é que eu consigo fazer um retorno dentro do Map (do forEach não dá)
ex : pegar o array e multiplica-los 

usando o forEach dando Undefined  

const novoArray = array.forEach(item => {
  return item * 2;
})

document.body.innerText = JSON.stringify(Object.entries({novoArray}));

----------------------------------

Maneira para não sair undefined com o forEach 

const novoArray = [];

array.forEach(item => {
  novoArray.push(item*2);
})

---------------------------------

usando o Map 
O map sempre vai retornar um vetor(array) com o mesmo tamanho do vetor original  


const novoArray = array.map(item => {
 return item * 2;
})

document.body.innerText = JSON.stringify(Object.entries({novoArray}));

--------------------------------

multiplicando os pares por 10 usando condicionais 

const novoArray = array.map(item => {
  if(item % 2 == 0) {
    return item * 10;
  }
  return item;
})

métodos
map, filter, every, some, find, findIndex, reduce.

*/

document.body.innerText = JSON.stringify(Object.entries({novoArray}));



// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







