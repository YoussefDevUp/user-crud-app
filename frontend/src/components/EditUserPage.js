import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import EditUserForm from './EditUserForm';

const EditUserPage = () => {
  const { id } = useParams(); // Récupérer l'ID de l'utilisateur depuis l'URL
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleUserUpdated = (updatedUser) => {
    navigate('/users'); // Rediriger vers UserListPage après la mise à jour
  };

  if (!user) {
    return <div>Loading...</div>; // Afficher un message de chargement
  }

  return (
    <div className="container">
      <h1>Edit User</h1>
      <EditUserForm user={user} onUserUpdated={handleUserUpdated} />
    </div>
  );
};

export default EditUserPage;