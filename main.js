const user = {
  name:'erik',
  idade : '22',
  address :{
      street:'Rua Teste',
      number : '176'
  }, 
};

document.body.innerText = JSON.stringify(Object.entries(user)); 

console.log(user)


// document.body.innerText = ('name' in user); - puxando uma chave e retornando se existe ou não com true ou false 

// document.body.innerText = Object.keys(user) - retornando todas as chaves (name, idade, address)

// document.body.innerText = Object.values(user) - retornando todos os valores das chaves (erik, 22, object, object) "object porq o browser n sabe como apresentar os valores"

// document.body.innerText = JSON.stringify(Object.values(user)); - com o 'JSON.stringify' os valores dentro de uma objeto filho conseguem ser apresentados no browser 

// document.body.innerText = JSON.stringify(Object.entries(user)); - com o 'Object.entries' conseguimos mostrar os vetores de chaves e valores organizados pelos colchetes