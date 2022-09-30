
// Optional Chaining 

const user = {
  name:'erik',
  age : '22',
  address :{
      street:'Rua Teste',
      number : '176',
      zip : {
        //code : '12345678',
        city : 'São Paulo'
      },
      showFullAddress(){
        return 'ok';
      }
  }, 
};

// maneira correta utilizando o Optional Chaining com Nullish Coalescing 
// document.body.innerText = user.address?.zip?.code ?? 'Não Informado';


// caso eu tenha uma função dentro do objeto e "caso" ele não exista, eu consigo usar o Optional para tratar 
// o erro no console assim :
// document.body.innerText = user.address.showFullAddress?.();


// const key = 'uma-chave-que-não-exista';
// document.body.innerText = user?.[key]






/* Utilizando o If para ver se há chaves e valores. Tratando-se de uma syntax muito grande (não indicado)
document.body.innerText = 
user.address ? user.address.zip ? user.address.zip.code : 'Não Informado'
 : 'Não Informado'
*/




// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







