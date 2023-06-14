const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Luis Guilherme',
    email: 'luisgcostaguedes@gmail.com',
    phone: '9999999999',
    category_id: v4(),

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
