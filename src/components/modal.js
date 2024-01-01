import React, { useState } from 'react';
import { Button, Modal as AntModal, Card } from 'antd';
import FormBarber from './form';

const MarcarHorario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log('Card selecionado:', selectedCard);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const cards = [
    { id: 1, title: 'Corte 1', content: 'Degrade', image: 'https://i.ytimg.com/vi/ZnReROilfjg/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGOBYAC4AOKAgwIABABGFcgUyhlMA8=&rs=AOn4CLCp6_o0pq12El1lCWImJKfRzb8Nzw', price: 'R$ 50,00' },
    { id: 2, title: 'Corte 2', content: 'Degrade + Barba', price: 'R$ 70,00' },
    { id: 3, title: 'Corte 3', content: 'Platinado', price: 'R$ 80,00' },
    { id: 4, title: 'Corte 4', content: 'Pigmentação', price: 'R$ 60,00' },
  ];

  return (
    <>
    <Button type="primary" onClick={showModal}>
      Selecionar
    </Button>
    <AntModal
      title="Basic Modal"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Agendar"
      style={{
        minHeight: '500px',   // Ajuste da altura mínima
        minWidth: '620px',    // Ajuste da largura mínima para acomodar a margem
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormBarber onFinish={onFinish} onFinishFailed={onFinishFailed} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            size="small"
            title={card.title}
            extra={<a href="#" onClick={() => handleCardClick(card.id)}>Selecionar</a>}
            style={{
              width: 300,
              marginBottom: '16px',
              border: selectedCard === card.id ? '2px solid #1890ff' : 'none',
            }}
          >
            {card.image && <img src={card.image} alt={`Imagem do ${card.title}`} style={{ maxWidth: '100%', marginBottom: '8px' }} />}
            <p>{card.content}</p>
            <p>Preço: {card.price}</p>
          </Card>
        ))}
      </div>
    </AntModal>
  </>
  );
};

export default MarcarHorario;
