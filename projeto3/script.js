
setInterval(function(){
	var slideAtivo = document.querySelector('.slide.ativo');
var prox = slideAtivo.nextElementSibling;

if(prox == null){
	prox = document.querySelector('.slide');
}
slideAtivo.classList.remove('ativo');
prox.classList.add('ativo');
}, 3000);


