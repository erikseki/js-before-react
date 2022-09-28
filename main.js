const user = {
  name:'erik',
  idade : '22',
  address :{
      street:'Rua Teste',
      number : '176'
  }, 
};

// Desestruturação - Remover parte do objeto para uma variável a parte, ou seja...

// ao invés disso - const address = user.address, eu consigo fazer...
const {address} = user

// conseguimos também trocar o nome das keys fazendo (idade : age) na variável e imprimindo como 'age' ao invés de idade
const {idade : age} = user

// document.body.innerText = JSON.stringify(Object.entries({age})); 


// conseguimos adicionar uma nova chave com ou sem valores dentro da variável, contudo a preferencia do resultado sempre será no que estiver no objeto (escopo)
const {nickname = 'seki'} = user


/* a Desestruturação também é utilizado nas funções. 


function mostrarIdade(user) {
  return user.idade;
}

ou adicionar dentro do parâmetro um '{}' para um novo objeto 


function mostrarIdade({ idade}) {
  return idade;
}

ou classificar dentro do parâmetro as chaves e valores quando não há nenhum


function mostrarIdade({ idade = 24}) {
  return idade;
}

em qualquer lugar que lidamos com objetos seja parametros de funções, variáveis, construtores e métodos de classes. 


*/


document.body.innerText = mostrarIdade(user)


// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







