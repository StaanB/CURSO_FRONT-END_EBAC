$(document).ready(function () {
  $("#telefone").mask("(00) 0 0000-0000", { placeholder: "(  )       -     " });

  $("#CPF").mask("000.000.000-00", { placeholder: "    .    .    -" });

  $("#CEP").mask("00000-000", { placeholder: "      -   " });

  $("form").validate({
    rules: {
      nomeCompleto: { required: true },
      email: { required: true },
      telefone: { required: true },
      CPF: { required: true },
      endereco: { required: true },
      CEP: { required: true },
    },

    messages: {
      nomeCompleto: "Insira seu nome completo.",
      email: "Insira seu email",
      telefone: "Insira seu telefone",
      CPF: "Insira seu CPF",
      endereco: "Insira seu endereço",
      CEP: "Insira seu CEP",
    },

    
  });
});
