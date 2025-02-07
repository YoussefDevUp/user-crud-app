import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';

const HomePage = () => {
  return (
    <div>
      <h1>User Management</h1>
      <Link to="/add-user">
        <button>Add New User</button>
      </Link>
      <UserList />
    </div>
  );
};

export default HomePage;