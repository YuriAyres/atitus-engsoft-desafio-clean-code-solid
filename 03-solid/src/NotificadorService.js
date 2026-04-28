class NotificadorService {
  async enviarConfirmacao(email) {
    console.log(`Enviando e-mail para ${email}...`);
  }
}

module.exports = NotificadorService;