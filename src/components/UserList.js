import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = ({ apiUrl }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <h2 className='my-4'>Lista de usuários</h2>
      <div className="containter bg-white rounded-4 p-1">

      <table className="table table-striped rounded-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Observations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.obs}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-warning mx-1">Edit</Link>
                <button 
                  className="btn btn-danger mx-1" 
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserList;
