import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
