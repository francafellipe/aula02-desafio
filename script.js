// Funções para cálculos
function calcularAreaTriangulo() {
    alert("Função para calcular a área de um triângulo.");

    var base = prompt("Informe a base do triângulo:");
    var altura = prompt("Informe a altura do triângulo:");
    
    // Calcular a área do triângulo
    var area = 0.5 * base * altura;
    
    // Exibir o resultado
    alert("A área do triângulo é: " + area);
}

function calcularAreaRetangulo() {
    alert("Função para calcular a área de um retângulo.");
    var comprimento = prompt("Informe o comprimento do retângulo:");
    var largura = prompt("Informe a largura do retângulo:");
    
    // Calcular a área do retângulo
    var area = comprimento * largura;
    
    // Exibir o resultado
    alert("A área do retângulo é: " + area);
}

function calcularVolumeCubo() {
    alert("Função para calcular o volume de um cubo.");
    var aresta = prompt("Informe o comprimento da aresta do cubo:");
    
    // Calcular o volume do cubo
    var volume = Math.pow(aresta, 3);
    
    // Exibir o resultado
    alert("O volume do cubo é: " + volume);
}

function calcularAreaCirculo() {
    alert("Função para calcular a área de um círculo.");
    var raio = prompt("Informe o raio do círculo:");
    
    // Calcular a área do círculo
    var area = Math.PI * Math.pow(raio, 2);
    
    // Exibir o resultado
    alert("A área do círculo é: " + area);
}

// Event Listeners para os botões
document.querySelector(".botao-triangulo button").addEventListener("click", calcularAreaTriangulo);
document.querySelector(".botao-retangulo button").addEventListener("click", calcularAreaRetangulo);
document.querySelector(".botao-cubo button").addEventListener("click", calcularVolumeCubo);
document.querySelector(".botao-circulo button").addEventListener("click", calcularAreaCirculo);
document.querySelector(".botao-sair button").addEventListener("click", function() {
    alert("Sair/Exit");
});
