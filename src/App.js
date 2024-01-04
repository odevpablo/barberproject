import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AgendamentoPage from './components/Agendamento';
import { Button, Modal, Input } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import AppRoutes from './routes/routes';
import Footer from './components/footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (password === '1234') {
      setIsAuthenticated(true);
      setIsModalVisible(false);
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const navigateToAdminPage = () => {
    if (isAuthenticated) {
      window.location.href = '/adminpage';
    } else {
      showModal();
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
          <div className='adminconfig'>
            <Button type="primary" icon={<EllipsisOutlined />} onClick={navigateToAdminPage} />
          </div>
          <Routes>
            <Route path="/adminpage" element={<Navigate to={isAuthenticated ? '/adminpage' : '/'} />} />
          </Routes>
          <AgendamentoPage/>

          <Modal title="Digite a senha" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Modal>
          <Footer/>
        </header>
      </div>
    </Router>
  );
}

export default App;
