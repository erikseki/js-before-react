
// Promises


/*
exemplos das promises do resolve e reject e do then e catch.


const somaDoisNumeros = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

somaDoisNumeros(1,3)
  .then(soma => {
    document.body.innerText = soma;
  })
  .catch(err => {
    console.log(err);
  })

----------------------------------------
um modelo mais realista. 
conseguimos buscar informações através do fetch (url de algum servidor) e puxar pelo then ou catch 


fetch('https://api.github.com/users/erikseki')
  .then(response => {
    console.log(response);
  })
  .catch(err =>{
    console.log(err);
  })


& trocando response.text para um formato em texto 

fetch('https://api.github.com/users/erikseki')
  .then(response => {
    response.json().then(body => {
      console.log(body);
    })
  })
  .catch(err =>{
    console.log(err);
  })

*responde.text ou response.json (2 modelos de arquivos )


& abaixo conseguimos fazer uma restruturação do then com o mesmo resultado contudo visivelmente melhor.


fetch('https://api.github.com/users/erikseki')
  .then(response =>{
    return response.json();
  })
  .then(body =>{
    console.log(body);
  })
  .catch(err =>{
    console.log(err);
  })

& abaixo temos o finally que vai ser executado sempre no final quando der resposta ou erro

fetch('https://api.github.com/users/erikseki')
  .then(response =>{
    return response.json();
  })
  .then(body =>{
    console.log(body);
  })
  .catch(err =>{
    console.log(err);
  })
  .finally(() =>{
    console.log('deuuu');
  })


*/

// outra maneira de de usar as promises com async await (await para aguardar ate a resposta ser atendida)

// async function buscaDadosNoGithub() {
//   const response = await fetch('https://api.github.com/users/erikseki');
//   const body = await response.json();

//   console.log(body);
// }

// buscaDadosNoGithub();




// async com then, catch e finally
// async function buscaDadosNoGithub() {
//   try {
//     const response = await fetch('https://api.github.com/users/erikseki');
//     const body = await response.json();
  
//     console.log(body);
  
  
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('deuu');
//   }
// }

// buscaDadosNoGithub();


// toda função assincrona(async) vira uma promise automaticamente  
// trazendo a info name do body 

async function buscaDadosNoGithub() {
  try {
    const response = await fetch('https://api.github.com/users/erikseki');
    const body = await response.json();
  
    return body.name;
  
  } catch (error) {
    console.log(error);
  } finally {
    console.log('deuu');
  }
}

buscaDadosNoGithub().then(name => {
  console.log(name);
});



// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







