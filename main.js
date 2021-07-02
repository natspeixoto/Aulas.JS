function clicou(){
    document.getElementBy("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
    alert("Obrigada por clicar!")
}

function redirecionar(){
    window.open("http://globallabs.academy/"); //abrir em outra aba
    window.location.href = "https://globallabs.academy/"; //abrir na mesma aba

}

function trocar(){
    documetn.getElementById("mouserover").innerHTML = "Obrigada por passsar o maouse";
    alert("Trocar texto")
}

function voltar(){
    document.getElementById("mouseove").innerHTMl = "Passe o mouse aqui";

}

function funcaoChange(elemento){
    console.log(elemento.value); // calcular vallor do elemento
}

/*
//Funções

    return n1+ n2;
}
*/
/*
var validar= 0;
function validaIdade(idade){
    var validar; //validar local da função. Se eu tirar o "var", utilizará o validar global
    if (idade >+ 18){
        validar = true
}else{
    validar = false
}
return validar;
}else

var idade = prompt("Qual sua idade");
console.log(validade(idade));
console.log(validar);

*/


//alert(soma 5,10);

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

*/


/*var cont;
for( cont=0, cont<=5, cont++){//enquanto  cont for menor ou igual a cinco, incrementa 1
    alert(count);
};
*/


/*
var cont = 5;
while(cont <5){
    console.log(cont);
    //cont = cont + 1;
    cont ++ //recebe ele e incrementa 1

};

*/





/* Condicional
var idade = prompt("Qual é a tua idade?"); //browser exibe pergunta para usuário e a resposta será armazenada na variável
if (idade >= 18){
    alert("maior de idade");
}else{
    alert ("Menor de idade");
}
*/



//Dicionário
//var fruta = ( nome: "Apple", cor : "Red");
//console.log(fruta.nome);
//alert(fruta.cor);


//Lista de Dicionário

//var frutas = [( nome: "Apple", cor : "Red"), (nome: "Grape", cor: "Purple")]
//console.log(frutas);
//alert(fruta[1].nome);


//var lista = (alert(message?): void;
//console.log(lista[1]);
//lista.push("uva");
//lista.pop();
//console.log(lista.lenght); //tamanho da lista 
//console.log(lista.reverse()); 
//console.log(lista.toString()); //perde a referencia de array, vira string. Primeiro elemento da string "m"
//console.log(lista.join( "|"));


//var nome = "Natalia Peixoto";
//var idade = 27;
//var idade2 = 10;
//var fra = "Japão é o melhor time do mundo";
//alert ("Bem-vindo" + nome);
//alert(nome + "tem" + idade + "anos" .);*/
//alert (idade + idade2);
//console.log(nome); /* vicê consegue visualizar dando F12 na pag*/
//console.log(idade + idade2);
//console.log(idade * idade2);

//console.log(frase.toLowercase());
//console.log(frase.replace("Japão", "Brasil"));

/* Pelo console na página, você consegue fazer debug no código*/