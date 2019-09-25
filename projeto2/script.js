
var botao = document.querySelector('.menu-button');
var sidebar = document.querySelector('.sidebar');

/* addEventListener(evento, callback) */

botao.addEventListener('click', function(){
	sidebar.classList.toggle('ativo'); /* Adiciona classe */
});
