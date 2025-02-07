import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const AddUserPage = () => {
  return (
    <div>
      <h1>Add New User</h1>
      <UserForm />
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default AddUserPage;