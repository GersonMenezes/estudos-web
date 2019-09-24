//alert("Hello world!");

var altura = document.getElementById('altura'),
		peso = document.getElementById('massa'),
		titulo = document.querySelector('.titulo');


botao = document.querySelector('#botao');

botao.addEventListener('click', function(){
	var resultado = IMC(peso.value, altura.value);

	console.log(resultado);

	titulo.innerHTML = "Teu IMC é: " + resultado.toFixed(2);
});

function IMC(peso, altura){
	var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
	return imc;
}