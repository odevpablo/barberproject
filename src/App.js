import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import AdminPage from './components/adminPage';


function App() {
  return (
    <Router>
      <div className="App">      <AdminPage/>

        <header className="App-header">
        </header>
      </div>

    </Router>
  );
}

export default App;
