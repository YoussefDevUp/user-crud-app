import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserItem from './UserItem'; // Composant pour afficher un utilisateur

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  };

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <button onClick={() => navigate('/')}>Add New User</button>
      <ul>
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onDelete={handleDeleteUser}
            onEdit={() => navigate(`/edit-user/${user.id}`)} // Rediriger vers EditUserPage
          />
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;