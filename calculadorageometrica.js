//CODIGO ABAIXO FOI EU QUE FIZ E DEU CERTO


let opcao;

function triangulo(){
    let base=parseFloat(prompt("Digite o valor da base: "));
    let altura=parseFloat(prompt("Digite o valor da altura: "));
    return (base*altura)/2;
}
function retangulo(){
    let base=parseFloat(prompt("Digite o valor da base: "));
    let altura=parseFloat(prompt("Digite o valor da altura: "));
    return base*altura;
}
function quadrado(){
    let lado=parseFloat(prompt("Digite o valor do lado "));
    return lado*lado;
}

function trapezio(){
    let baseMaior=parseFloat(prompt("Digite o valor da Base Maior: "));
    let baseMenor=parseFloat(prompt("Digite o valor da Base Menor: "));
    let altura=parseFloat(prompt("Digite o valor da altura: "));
    return ((baseMaior+baseMenor)*altura)/2;
}

function circulo(){
    let raio=parseFloat(prompt("Digite o valor do raio: "));
   
    return (3.14*raio*raio);
}


do{

    opcao=prompt("Digite o calculo desejado: \n" + "\n1. área do triângulo"+ "\n2. área do retângulo"+ "\n3. área do quadrado"+ "\n4. área do trapézio"+ "\n5. área do círculo"+ "\n6. SAIR");


switch(opcao){
    case "1":
    
        alert("O resultado é: " + triangulo() )

    break
    case "2":
        alert("O resultado é: " + retangulo() )
    break
    case "3":
        alert("O resultado é: " + quadrado() )
    break
    case "4":
        alert("O resultado é: " + trapezio() )
    break

    case "5":
        alert("O resultado é: " + circulo() )
    break

    case "6":
        alert("Finalizando...")
    break

    default:
        alert("Opção invalida!")

}

}while(opcao!=="6")


//-------------------------------------------------------------------------------------------------------------------------

//CODIGO ABAIXO DA RESOLUÇÃO DO PROFESSOR
/*
function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}
function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
  }
  function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
  }
  function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
  }
  function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
  }


 
function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )}

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcularAreaTriangulo()
          break
        case "2":
          resultado = calcularAreaRetangulo()
          break
        case "3":
          resultado = calcularAreaQuadrado()
          break
        case "4":
          resultado = calcularAreaTrapezio()
          break
        case "5":
          resultado = calcularAreaCirculo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }

  executar()

  */