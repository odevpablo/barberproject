import React, { useState, useEffect } from 'react';
import OptionsBarber from './barbers';

const AgendamentoPage = () => {

  return (
    <div className='form'>
      <h2>Opções de Agendamento</h2>
      <label>Selecione um Barbeiro:</label>
      <OptionsBarber/>
    </div>
  );
};

export default AgendamentoPage;
