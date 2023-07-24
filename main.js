const form = document.getElementById("form_salarios");
const salarioAlmejado = document.getElementById("salario_almejado");
const salarioAtual = document.getElementById("salario_atual");

let formEValido = false;

function primeiroMaiorQueSegundo(salarioAtual, salarioAlmejado) {
  return parseInt(salarioAtual) < parseInt(salarioAlmejado);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagemFormularioAprovado = `Você atualmente tem um salário de <strong>R$${salarioAtual.value}</strong> e deseja um salário de <strong>R$${salarioAlmejado.value}</strong>`;

  formEValido = primeiroMaiorQueSegundo(
    salarioAtual.value,
    salarioAlmejado.value
  );

  if (formEValido) {
    let mensagemSucesso = document.querySelector(".sucess_message");
    mensagemSucesso.innerHTML = mensagemFormularioAprovado;
    mensagemSucesso.style.display = "block";

    salarioAtual.value = "";
    salarioAlmejado.value = "";
  } else {
    let mensagemErro = document.querySelector(".error_message");
    mensagemErro.style.display = "block";
  }
});

salarioAlmejado.addEventListener("keyup", (e) => {
  if (!primeiroMaiorQueSegundo(salarioAtual.value, e.target.value)) {
    let mensagemErro = document.querySelector(".error_message");
    mensagemErro.style.display = "block";
    salarioAlmejado.classList.remove("okay");
    salarioAlmejado.classList.add("error");

    let mensagemSucesso = document.querySelector(".sucess_message");
    mensagemSucesso.style.display = "none";
  } else {
    let mensagemErro = document.querySelector(".error_message");
    mensagemErro.style.display = "none";
    salarioAlmejado.classList.remove("error");
    salarioAlmejado.classList.add("okay");
  }
});
