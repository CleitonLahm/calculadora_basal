function calcular() {
	// Obter valores dos inputs
	var sexo = document.querySelector('input[name="sexo"]:checked').value;
	var altura = document.getElementById("altura").value;
	var peso = document.getElementById("peso").value;
	var idade = document.getElementById("idade").value;

	// Validar valores dos inputs
	if (altura == "" || peso == "" || idade == "") {
		alert("Por favor, preencha todos os campos.");
		return;
	}

	// Calcular Taxa Metabólica Basal (TMB)
	var tmb;
	if (sexo == "masculino") {
		tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
	} else {
		tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
	}

	// Exibir resultado da TMB
	document.getElementById("tmb").textContent = tmb.toFixed(0);

	// Calcular calorias por dia para cada nível de atividade
	document.getElementById("sedentario").textContent = (tmb * 1.2).toFixed(0);
	document.getElementById("leve").textContent = (tmb * 1.375).toFixed(0);
	document.getElementById("moderado").textContent = (tmb * 1.55).toFixed(0);
	document.getElementById("alto").textContent = (tmb * 1.725).toFixed(0);
	document.getElementById("extremo").textContent = (tmb * 1.9).toFixed(0);
}
