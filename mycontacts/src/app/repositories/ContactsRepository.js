const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Luis Guilherme',
    email: 'luisgcostaguedes@gmail.com',
    phone: '9999999999',
    category_id: v4(),

  },

  {
    id: v4(),
    name: 'Batata',
    email: 'batata@gmail.com',
    phone: '99888888888',
    category_id: v4(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newCOntact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,

      };
      contacts.push(newCOntact);
      resolve(newCOntact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
