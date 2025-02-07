import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import EditUserForm from './EditUserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  };

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error(error));
  };

  const startEditingUser = (user) => {
    setEditingUser(user);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <UserForm onUserAdded={handleUserAdded} />
      {editingUser && (
        <EditUserForm user={editingUser} onUserUpdated={handleUserUpdated} />
      )}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong> - {user.email} - {user.age} ans - {user.phone}
            </div>
            <div>
              <button className="edit-button" onClick={() => startEditingUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;