class Pedido {
  constructor(dados) {
    this.id = dados.id;
    this.itens = dados.itens;
    this.clienteEmail = dados.clienteEmail;
  }

  validar() {
    if (!this.itens || this.itens.length === 0) {
      throw new Error("Pedido sem itens");
    }
  }

  calcularTotal() {
    let total = this.itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );

    if (total > 1000) total *= 0.9;

    return total;
  }
}

module.exports = Pedido;