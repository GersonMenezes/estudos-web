var formulario = document.querySelector('#formulario');
var titulo = document.getElementById('titulo');
var valor = document.getElementById('valor');
var listagem = document.getElementById('listagem');

formulario.addEventListener('submit', function(event){
	event.preventDefault();		/* Formulario não envia dados para outro lugar */

	if(titulo.value == '' || valor.value == ''){
		alert("Os campos não podem estar vazios")
	} else {
		var linha = document.createElement('tr');
		var colunaTitulo = document.createElement('td'); /* É criado uma coluna para essa nova variavel */
		var colunaValor = document.createElement('td');

		colunaTitulo.innerHTML = titulo.value; /* Titulo recebe valor do input no submit */
		colunaValor.innerHTML = valor.value;

		linha.appendChild(colunaTitulo);	/* Coluna as colunas na linha */
		linha.appendChild(colunaValor);
		listagem.appendChild(linha);
		console.log(linha);
	}

});
