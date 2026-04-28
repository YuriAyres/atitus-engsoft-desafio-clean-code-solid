const Pedido = require("./Pedido");
const VendasRepository = require("./VendasRepository");
const NotificadorService = require("./NotificadorService");

class SistemaDeVendas {
  constructor({ repository, notificador } = {}) {
    this.repository = repository || new VendasRepository();
    this.notificador = notificador || new NotificadorService();
  }

  async processarVenda(pedidoDados) {
    const pedido = new Pedido(pedidoDados);

    pedido.validar();
    const total = pedido.calcularTotal();

    const pedidoFinal = {
      ...pedidoDados,
      total,
      status: "pago"
    };

    await this.repository.salvar(pedidoFinal);
    await this.notificador.enviarConfirmacao(pedidoFinal.clienteEmail);

    return pedidoFinal;
  }
}

module.exports = SistemaDeVendas;