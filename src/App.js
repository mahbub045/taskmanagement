import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import TaskForm from './pages/TaskForm';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/create-task" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;

