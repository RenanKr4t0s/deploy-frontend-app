import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
// import dotenv from 'dotenv';

// dotenv.config();

const App = () => {
  const apiUrl = 'http://localhost:3001';

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">User CRUD App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add User</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<UserList apiUrl={apiUrl} />} />
          <Route path="/add" element={<AddUser apiUrl={apiUrl} />} />
          <Route path="/edit/:id" element={<EditUser apiUrl={apiUrl} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
