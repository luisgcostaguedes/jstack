const { v4 } = require('uuid');

const contacts = [
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
}

module.exports = new ContactsRepository();
