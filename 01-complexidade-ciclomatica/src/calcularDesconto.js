function calcularDesconto(cliente, valor) {
  const regras = {
    premium: [
      {
        condicao: (c, v) => v > 1000 && c.anosCadastro > 5,
        desconto: 0.20
      },
      {
        condicao: (c, v) => v > 1000,
        desconto: 0.15
      },
      {
        condicao: (c, v) => v > 500,
        desconto: 0.10
      },
      {
        condicao: () => true,
        desconto: 0.05
      }
    ],
    gold: [
      {
        condicao: (c, v) => v > 1000,
        desconto: 0.10
      },
      {
        condicao: () => true,
        desconto: 0.02
      }
    ]
  };

  const regrasCliente = regras[cliente.tipo];

  if (!regrasCliente) return 0;

  const regraAplicavel = regrasCliente.find(regra =>
    regra.condicao(cliente, valor)
  );

  return regraAplicavel ? valor * regraAplicavel.desconto : 0;
}

module.exports = calcularDesconto;
