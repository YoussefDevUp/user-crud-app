import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', { name, email, age, phone })
      .then(response => {
        onUserAdded(response.data);
        navigate('/'); // Rediriger vers la page d'accueil
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;