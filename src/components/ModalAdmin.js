import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const ModalAdmin = ({ visible, onClose }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOk = () => {
    if (password === 'senha') {
      onClose();
      navigate('/adminpage');
    } else {
      alert('Senha Errada');
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Configurações do Administrador"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input  
        type="password"
        placeholder="Digite a sua Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Modal>
  );
};

export default ModalAdmin;
