$('#personagem').on('change', function(){
	chamarPersonagem(this.value)
});

function chamarPersonagem(valor){
	$.ajax({
		url: `https://swapi.co/api/people/${valor}/`,
		method: "GET",
		beforeSend: function(){
			$('#cartao').html(`<h2>Loading...</h2>`);
		},
		success: function(starWar){
			/*console.log(starWar);*/
			$('#cartao').html(`<h2>${starWar.name}</h2>
				<p>Altura: ${starWar.height} </p>
				<p>Peso: ${starWar.mass}</p>
				`);
		},
		error: function(pepino){
			console.log(pepino);
		}
	});
}

