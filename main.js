// nullish coalescing operator 

const idade = 0;

// utiliza o '||' para o 0, '', [], false, undefined, null > falsy 
//  substituir para o nullish '??' que é mais restritivo para tratar dados nulos 

document.body.innerText= 'sua idade é: ' + (idade ?? 'Não informado');