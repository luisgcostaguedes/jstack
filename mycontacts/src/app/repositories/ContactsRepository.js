const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Luis Guilherme',
    email: 'luisgcostaguedes@gmail.com',
    phone: '9999999999',
    category_id: uuid(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
