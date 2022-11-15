let number_one = document.getElementById("number_one");
let number_two = document.getElementById("number_two");

let campo_resultado = document.getElementById("resultado");

const btn_operacao = document.querySelectorAll(".button");

let operacao;
let resultado;

btn_operacao.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operacao = e.target.value;
    console.log(operacao);
  });
});

function mudaEstilo() {
  campo_resultado.style.boxShadow = "1px 10px 5px white";
  campo_resultado.style.backgroundColor = "#87CEEB";
  campo_resultado.style.color = "#F5F5F5";
  campo_resultado.style.borderRadius = "50%";
  campo_resultado.style.border = "2px solid whitesmoke";
  campo_resultado.style.fontSize = "35px";
}

function calcular() {

  switch (operacao) {
    case "*":
      campo_resultado.textContent = multiplicacao();
      mudaEstilo();
      break;
    case "/":
      campo_resultado.textContent = divisao();
      mudaEstilo();
      break;
    case "+":
      campo_resultado.textContent = soma();
      mudaEstilo();
      break;
    case "-":
      campo_resultado.textContent = subtracao();
      mudaEstilo();
      break;
    default:
  }
}

function multiplicacao() {
  resultado = parseInt(number_one.value) * parseInt(number_two.value);
  return resultado;
}

function divisao() {
  if (parseInt(number_one.value) > parseInt(number_two.value)) {
    resultado = parseInt(number_one.value) / parseInt(number_two.value);
  } else {
    resultado = parseInt(number_two.value) / parseInt(number_one.value);
  }
  return resultado;
}

function soma() {
  resultado = parseInt(number_one.value) + parseInt(number_two.value);
  return resultado;
}

function subtracao() {
  resultado = parseInt(number_one.value) - parseInt(number_two.value);
  return resultado;
}
