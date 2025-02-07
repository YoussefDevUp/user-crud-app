import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, onUserUpdated }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Mettre à jour les champs du formulaire si l'utilisateur change
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/users/${user.id}`, { name, email })
      .then(response => {
        onUserUpdated(response.data); // Appeler la fonction de mise à jour
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update User</button>
      <button type="button" onClick={() => onUserUpdated(null)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;