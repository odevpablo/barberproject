import React, { useState, useEffect } from 'react';
import OptionsBarber from './barbers';

const AgendamentoPage = () => {

  return (
    <div className='form'>
      <h2>Sua Barbearia</h2>
      <label>Selecione um Profissional:</label>
      <OptionsBarber/>
    </div>
  );
};

export default AgendamentoPage;
