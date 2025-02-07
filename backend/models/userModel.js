const db = require('../db/database');

const User = {
  getAll: (callback) => {
    db.all('SELECT * FROM users', callback);
  },
  getById: (id, callback) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], callback);
  },
  create: (user, callback) => {
    const { name, email } = user;
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], callback);
  },
  update: (id, user, callback) => {
    const { name, email } = user;
    db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], callback);
  },
  delete: (id, callback) => {
    db.run('DELETE FROM users WHERE id = ?', [id], callback);
  },
};

module.exports = User;