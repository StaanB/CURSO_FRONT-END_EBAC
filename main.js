$("form").on("submit", function (e) {
  e.preventDefault();
  const tarefa = $("#tarefa-para-adicionar").val();

  const itemLista = `<li class="item-lista">${tarefa}</li>`;

  $("main ul").append(itemLista);

  $("#tarefa-para-adicionar").val("")
});

$("ul").on("click", function (e) {
  $(e.target).addClass("clicado");
});
