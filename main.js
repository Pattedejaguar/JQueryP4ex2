$(function(){
	// Création de la méthode click sur le bouton d'id #calcul
	$('#calcul').click(function(){
		// on récupère ce qu'il y a dans nos input dans la variable notes
		var notes = $('input');
		var sum = 0;
		$.each(notes, function(){
			sum += Number($(this).val());
		});
		var moyenneCalcul = (sum/notes.length).toFixed(2);
		if (moyenneCalcul >=0 && moyenneCalcul < 10){
			$result = "En dessous de la moyenne";
		}
		if (moyenneCalcul >= 10 && moyenneCalcul < 13){
			$result = "Moyen";
		}
		if (moyenneCalcul >= 13 && moyenneCalcul < 16){
			$result = "Bien";
		}
		if (moyenneCalcul >= 16 && moyenneCalcul < 20){
			$result = "Très Bien";
		}
		if (moyenneCalcul == 20){
			$result = "Excellent";
		}
		console.log($result);

			$('#moyenne').html("Votre moyenne est de : " + moyenneCalcul + "/20");
			$('#appreciation').html("Appréciation : " + $result );

	});

});
