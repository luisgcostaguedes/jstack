const ContactsRepository = require('../repositories/ContactsRepository');

class ContactControler {
  async index(request, response) { // listar os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) { // mostrar os registros
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar novo registro
  }

  async delete(request, response) { // deletar novo registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactControler();
