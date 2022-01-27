var titulo = document.querySelector(".titulo-principal");
console.log(titulo.textContent);	
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (i=0; i<pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc;

    var pesoValido = validaPeso(peso); //true or false
    var alturaValido = validaAltura(altura);

    if (!pesoValido){
        paciente.classList.add("paciente-invalido")
        pesoValido = false;
        tdImc.textContent = "Peso Inválido"
    }

    if (!alturaValido){
        paciente.style.backgroundColor="red";
        alturaValido = false;
        tdImc.textContent = "Altura Inválida"
    }

    if (pesoValido == false && alturaValido == false){
        tdImc.textContent = "#";
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}





