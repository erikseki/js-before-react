const user = {
  name:'erik',
  idade : '22',
  address :{
      street:'Rua Teste',
      number : '176'
  }, 
};

// Desestruturação - Remover parte do objeto para uma variável a parte


// Rest Operator na Desestruturação

/* 
mostrando todos os valores menos o name (apenas o resto dos objetos)

const {name, ...rest} = user
document.body.innerText = JSON.stringify(rest)

*/


// REST OPERATOR EM ARRAYS 


/* 

const array = [1,2,3,4,5,6,7,8,9,10];

podemos fazer ...

const first = array[0];
const second = array[1];

ou 

const [first,, third, ...rest ] = array  

*/


const array = [1,2,3,4,5,6,7,8,9,10];

const [first, , third, ...rest ] = array

document.body.innerText = JSON.stringify({first, third, rest});






// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







