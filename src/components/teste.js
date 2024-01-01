import React from 'react';
import axios from 'axios';

const MeuComponente = () => {
  const handleClick = async () => {
    try {
      // Valor que será enviado para a API
      const valorParaEnviar = "Emerson Juneo";

      // Substitua 'sua_url_api' pela URL real da sua API
      const response = await axios.post('sua_url_api', { nome: valorParaEnviar });

      console.log('Resposta da API:', response.data);
      // Adicione aqui qualquer manipulação adicional da resposta da API
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      // Adicione aqui qualquer tratamento de erro que você deseja realizar
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Cadastrar Emerson Juneo</button>
    </div>
  );
};

export default MeuComponente;
