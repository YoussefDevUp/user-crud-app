const User = {
  getAll: (callback) => {
    db.all('SELECT * FROM users', callback);
  },
  getById: (id, callback) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], callback);
  },
  create: (user, callback) => {
    const { name, email, age, phone } = user;
    db.run('INSERT INTO users (name, email, age, phone) VALUES (?, ?, ?, ?)', [name, email, age, phone], callback);
  },
  update: (id, user, callback) => {
    const { name, email, age, phone } = user;
    db.run('UPDATE users SET name = ?, email = ?, age = ?, phone = ? WHERE id = ?', [name, email, age, phone, id], callback);
  },
  delete: (id, callback) => {
    db.run('DELETE FROM users WHERE id = ?', [id], callback);
  },
};