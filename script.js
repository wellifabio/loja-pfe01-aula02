const uri = './assets/dados.json';
var produtos = [];

//Carrega os dados do Mockup
fetch(uri)
    .then(resp => resp.json())
    .then(resp => { produtos = resp; })
    .then(() => mostrarCards())

function mostrarCards() {
    const main = document.querySelector('main');
    produtos.forEach(p => {
        main.innerHTML += p.produto;
    })
}