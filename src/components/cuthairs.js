import React from 'react';
import SimpleSlider from './selectcut';
import TabelaHorarios from './tablehours';


const DivComponent = () => {
  
  return (
    <div className='timetable'>
      <label>Selecione um Horário:</label>
      <div className='tablehours'>
        <TabelaHorarios/>
      </div>
      <div className='cuthairs'>
        <SimpleSlider/>
      </div>
      <button id='submit'>
        Agendar
      </button>
    </div>
  );
};

export default DivComponent;