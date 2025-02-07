const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
};

exports.createUser = (req, res) => {
  const user = req.body;
  User.create(user, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  User.update(id, user, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated successfully' });
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted successfully' });
  });
};