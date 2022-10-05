
// Template Literals 


/*
interpolação de strings 

const name = 'erik';
const message = `Bem-vindo, ${name ?? 'visitante'}` ;

const name = null;
const message = `Bem-vindo, ${name ?? 'visitante'}` ;

ou 

const name = null;
const message = `Bem-vindo, ${name ? name : 'visitante'}` ;

tagged templates literals (estudar)
*/

const name = 'erik';
const message = `Bem-vindo, ${name ? name : 'visitante'}` ;

document.body.innerText = message


// document.body.innerText = JSON.stringify(Object.entries({mostrarIdade}));







