
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from '../components/adminPage'; // Ajuste o caminho conforme necessário
import AgendamentoPage from '../components/Agendamento';



const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
  );
};

export default AppRoutes;
