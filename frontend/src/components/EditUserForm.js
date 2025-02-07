import React, { useState } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, onUserUpdated }) => {
  // Initialiser les états avec des valeurs par défaut
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [age, setAge] = useState(user.age || '');
  const [phone, setPhone] = useState(user.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/users/${user.id}`, { name, email, age, phone })
      .then(response => {
        onUserUpdated(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Update User</button>
      <button type="button" onClick={() => onUserUpdated(null)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;