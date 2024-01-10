import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import AppRoutes from './routes/routes';
import Footer from './components/footer';
import AgendamentoPage from './components/Agendamento';
import ModalAdmin from './components/ModalAdmin';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
          <div className="adminconfig">
            <Button type="primary" icon={<EllipsisOutlined />} onClick={openModal}>
            </Button>
          </div>
          <AgendamentoPage />
          <Footer />
        </header>
        {modalVisible && ReactDOM.createPortal(
          <ModalAdmin visible={modalVisible} onClose={closeModal} />,
          document.body
        )}
      </div>
    </Router>
  );
};

export default App;
