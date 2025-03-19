const uri = './assets/dados.json';
var produtos = [
    {produto:'Boné'},
    {produto:'Camiseta'},
    {produto:'Meia'},
];

//Carrega os dados do Mockup
fetch(uri)
    .then(resp => resp.json())
    .then(resp =>{
        produtos = resp;
    })

function mostrarCards(){
    const main = document.querySelector('main');
    produtos.forEach(p=>{
        main.innerHTML += p.produto; 
    })
}