var form = document.getElementById('form');
var tarefa = document.getElementById('task');
var lista = [];
var listaTarefas = document.getElementById('lista-tarefas');

form.addEventListener('submit', function(event)
{
	event.preventDefault(); // Previne o padrao do formulario
	var valor = tarefa.value;  // Captura o que foi digitado no campo tarefa
	lista.push(valor);  // Insere no array lista esse valor
	addLista(lista);		// Chama a função que trata a lista e insere no localStorage
	console.log(lista);
	tarefa.value = '';
	verificaLista();
});

function addLista(lista){
	var listaJSON = JSON.stringify(lista);
	localStorage.setItem('lista',  listaJSON);
}

function verificaLista(){
	var verificador = localStorage.getItem('lista'); // Getpega as coisas

	if(verificador == null){
		console.log('lista vazia');
	} else {
		listaTarefas.innerHTML = ''; // eh a UL
		lista = JSON.parse(verificador); //Lista recebe o que vem do localStorage

		lista.forEach(function(item){ // igual ao for
			var listItem = document.createElement('li'); //criar um li a cada loop
			listItem.innerHTML = item; //Coloca o texto da tarefa (do localstorage) dentro da li

			listaTarefas.appendChild(listItem); //Coloca a LI dentro da UL
		});
	}
		
}

verificaLista();

