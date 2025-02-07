import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddUserPage from './components/AddUserPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </Router>
  );
};

export default App;