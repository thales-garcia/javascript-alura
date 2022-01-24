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

    var imc = peso / (altura*altura);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2);

    var pesoValido = true;
    var alturaValido = true;

    if (peso<=0 || peso>=300){
        paciente.classList.add("paciente-invalido")
        tdPeso.textContent = "Peso Inválido";
        pesoValido = false;
        tdImc.textContent = "Peso Inválido"
    }

    if (altura<=0 || altura>=3){
        paciente.style.backgroundColor="red";
        tdAltura.textContent = "Altura Inválida";
        alturaValido = false;
        tdImc.textContent = "Altura Inválida"
    }

    if (pesoValido == false && alturaValido == false){
        tdImc.textContent = "#";
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = peso/(altura*altura);

    //colocando as td dentro da tr 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)
    
});





