/*Conceitos de função de primeira classe; posso atribuir a variávéis 
estrutura de dados*/

function getName(){
    return 'Natália Peixoto';
}

function logFn(fn){ //recebe uma função por parametro
    console.log(fn()); //e aplica console.log no que a função retornar
}

const logFnResult = logFn;

logFnResult(getName);

