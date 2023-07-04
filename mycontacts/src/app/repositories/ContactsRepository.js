const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM  contacts');
    return rows;
  }

  async findById(id) {
    const row = await db.query('SELECT * FROM  contacts WHERE id = $1', [id]);
    return row;
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
   INSERT INTO contacts(name, email, phone, category_id)
   VALUES ($1, $2, $3, $4 )
   RETURNING *
   `, [name, email, phone, category_id]);
    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedCOntact = {
        id,
        name,
        email,
        phone,
        category_id,

      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedCOntact : contact
      ));
      resolve(updatedCOntact);
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
