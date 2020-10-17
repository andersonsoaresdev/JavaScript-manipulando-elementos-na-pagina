
function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("http://www.google.com.br")
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui também";
    elemento.innerHTML = "Passe o mouse aqui também"
}

/*
function trocar() {
    alert("trocar texto");
}
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

// var trajeto = ["mae", "floresta", "avó"];
// console.log(trajeto.toString());

// var d = new Date();
// alert(d.getDay());
// alert(d.getMinutes());

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};
*/

/*
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
*/

// var count = 0;
// while (count < 5) {
//    console.log(count);
//    count = count + 1;
// }

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

// var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]

// console.log(frutas);

// console.log(fruta.nome);
// console.log(fruta.cor);

// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");

// console.log(lista);

// console.log(lista.join(" - "))

// var nome = "Anderson Soares";
// var idade = 38;
// var idade2 = 27;
// var frase = "Japão é o melhor time do mundo";

// alert("Bem vindo " + nome + ". Você tem " + idade + " anos.");

// console.log(nome);
// console.log(idade);
// console.log(idade2);
// console.log(frase.replace("Japão", "Brasil"));
