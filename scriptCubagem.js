const sector = document.getElementById("sector");
const resultCubagem = document.getElementById("resultCubagem");

function botaoClicado() {
  let num1 = document.getElementById("altura").value;
  let num2 = document.getElementById("largura").value;
  let num3 = document.getElementById("comprimento").value;

  let resultOfMultiply = Number(num1) * Number(num2) * Number(num3);

  if (sector.value == "rodoviario") {
    resultCubagem.innerHTML = Number(resultOfMultiply) * 300;
  }

  if (sector.value == "aereo") {
    resultCubagem.innerHTML = Number(resultOfMultiply) * 167;
  }

  if (sector.value == "maritimo") {
    resultCubagem.innerHTML = Number(resultOfMultiply) * 1000;
  }
}




sector.addEventListener ("change", botaoClicado);
