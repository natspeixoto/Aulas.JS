/* Escopo Léxico - É a capacidade da função de lembrar do ambiente em, que ela foi criada*/
/* A função init retorna outra função e sempre usam a valo de exemplo*/ 

function init(){
    const exemplo = 'Essa variável';

    return function(){
        console.log(' 1- O valor da variável exemplo é: ${exemplo}.');


        return function(){
            console.log(' 2- O valor da variável exemplo é: ${exemplo}.');


            return function(){
                console.log(' 3- O valor da variável exemplo é: ${exemplo}.');
            }
        }
    }
} 

const initFn1 = init();

const initFn1 = initFn1();

const initFn1 = initFn2();

initFn3();

/* Cadeia de ações que deve ser evitada. O ideal é trabalhar com funções puras*/



/* Outra forma de resolver*/

function init(){
    const exemplo = 'Essa variável';

    return function(){
        console.log(' 1- O valor da variável exemplo é: ${exemplo}.');


        return function(){
            console.log(' 2- O valor da variável exemplo é: ${exemplo}.');


            return function(){
                console.log(' 3- O valor da variável exemplo é: ${exemplo}.');
            }
        }
    }
} 


init()()()(); /* Chama todas as funções de uma vez. Dá para fazer, mas não se deve fazer ;)*/
