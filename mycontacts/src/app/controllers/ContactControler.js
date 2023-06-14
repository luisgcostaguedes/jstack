const ContactsRepository = require('../repositories/ContactsRepository');

class ContactControler {
  async index(request, response) { // listar os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show(request, response) { // mostrar os registros
    response.json(request.params);
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
