import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import apiUrl from '../env';

const App = () => {
  
  console.log(apiUrl);

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-4 mt-2">
          <Link className="navbar-brand mx-2" to="/">Usuários Cadastrados</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-4">
                <Link className="nav-link" to="/">Usuários</Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link" to="/add">Adicionar Usuário</Link>
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
