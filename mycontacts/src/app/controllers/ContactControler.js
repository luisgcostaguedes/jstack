class ContactControler {
  index(request, response) { // listar os registros
    response.send('Send from Contact Controller');
  }

  show() { // mostrar os registros

  }

  store() {
    // criar novo registro
  }

  update() {
    // editar novo registro
  }

  delete() {
    // deletar novo registro
  }
}

module.exports = new ContactControler();
