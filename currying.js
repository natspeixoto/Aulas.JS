
/* Comum em linguagens funcionais, o JS permite a escrita de códigos funcionais, ou seja
escrever um código com múltiplas funções que se compõem para
resolver um problema
 Com o Currying você transforma uma função com muitos parâmentros em apenas uma funão que recebe um parametro 
 e para cada parameetro, retorna uma função
*/

function soma(a, b) {
    return a + b;
}

soma2(2, 2);
soma2(2, 3);
soma2(2, 4);
soma2(2, 5);

/* O primeiro paramentro é sempre repetido, o 2
se repete o tempo todo*/
/* No currying, para cada parâmetro, cria-se uma nova função*/

