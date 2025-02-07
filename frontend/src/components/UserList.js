import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import EditUserForm from './EditUserForm'; // Importez le composant EditUserForm

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Pour suivre l'utilisateur en cours d'édition

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fonction pour récupérer la liste des utilisateurs
  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  };

  // Fonction pour ajouter un nouvel utilisateur
  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]); // Ajouter le nouvel utilisateur à la liste
  };

  // Fonction pour supprimer un utilisateur
  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id)); // Mettre à jour la liste
      })
      .catch(error => console.error(error));
  };

  // Fonction pour démarrer l'édition d'un utilisateur
  const startEditingUser = (user) => {
    setEditingUser(user);
  };

  // Fonction pour mettre à jour un utilisateur
  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user))); // Mettre à jour la liste
    setEditingUser(null); // Arrêter l'édition
  };

  return (
    <div>
      <h1>Users</h1>
      {/* Afficher le formulaire d'ajout d'utilisateur */}
      <UserForm onUserAdded={handleUserAdded} />

      {/* Afficher le formulaire d'édition si un utilisateur est en cours d'édition */}
      {editingUser && (
        <EditUserForm user={editingUser} onUserUpdated={handleUserUpdated} />
      )}

      {/* Afficher la liste des utilisateurs */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age} ans - {user.phone}
            <button onClick={() => startEditingUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;