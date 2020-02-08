/* var nome = "Luiz Antonio";
var idade1 = 47;
var idade2 = 10;
//alert(nome + " tem " + idade1 + "anos");
//alert(idade1 + idade2);
console.log(nome);
console.log(idade1 + idade2);
var frase = "Remo é o melhor";
console.log(frase.replace("Remo","Brasil"));
alert(frase.replace("Remo","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
var n1 = 11;
var n2 = 3;
console.log(n1 * n2);
var lista =["maçã","pêra","laranja"];
console.log(lista);
alert(lista[1]);
lista.push("uva");
alert(lista);
console.log(lista);
lista.pop();
console.log(lista.length);
lista.push("banana");
console.log(lista[0]);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
var fruta = {nome:"banana",cor:"amarela"};
console.log(fruta.nome);
alert(fruta.cor);
var frutas = [{nome:"banana",cor:"amarela"},{nome:"uva",cor:"roxa"}];
console.log(frutas[1].nome);
alert(frutas[1].cor);
console.log(frutas);
*/
//var idade = 18;
/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*var count = 0;
while (count <= 5) {
console.log(count);
alert(count);
count ++;  
 };
 */
/* var count;
for(count=0 ; count <= 5 ; count++){
alert(count);
};
*/
/* var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));
*/
/*
function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(setReplace("vai japao","japao","brasil"));
*/
/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
*/
function clicou(){
    document.getElementById("agradeco").innerHTML = "<b>Muito obrigado!!</b>";
    console.log(document.getElementById("agradeco"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.academiapme.com.br/");
    window.location.href = "https://www.academiapme.com.br/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto!");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";   
    elemento.innerHTML = "Passar o mouse aqui"; 
}
function load(){
    alert("pagina carregada!");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}