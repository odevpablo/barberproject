import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AgendamentoPage from './components/Agendamento';
import { Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import AppRoutes from './routes/routes';
import AdminPageOverlay from './components/AdminPageOverlay'; // Importe o componente AdminPageOverlay

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
          <div className='adminconfig'>
            <Link to="/adminpage">
              <Button type="primary" icon={<EllipsisOutlined />} />
            </Link>
          </div>
          <Routes>
            <Route path="/adminpage/*" element={<AdminPageOverlay />} />
          </Routes>
          <AgendamentoPage/>
        </header>
      </div>
    </Router>
  );
}

export default App;
