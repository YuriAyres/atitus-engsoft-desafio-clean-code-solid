function encontrarProdutosComuns(listaA, listaB) {
  const setB = new Set(listaB);
  const comuns = [];

  for (const item of listaA) {
    if (setB.has(item)) {
      comuns.push(item);
    }
  }

  return comuns;
}

module.exports = encontrarProdutosComuns;
