import React, { useEffect, useState } from 'react';
import { Button, Modal as AntModal, Card } from 'antd';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const MarcarHorario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [form] = Form.useForm();
  const [horarios, setHorarios] = useState([]);
  const [nome, setNome] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/horarios')
      .then(response => response.json())
      .then(data => setHorarios(data))
      .catch(error => console.error('Erro ao obter horários:', error));
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);

    const { note, horario } = values;

    fetch('http://localhost:3001/api/salvarSelecao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        selectedCard,
        otherData: '',
        horario,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Erro ao salvar seleção:', error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const cards = [
    { id: 1, title: 'Degrade', image: 'https://i.pinimg.com/564x/92/2f/b5/922fb501e7eb3756a76367c54909f503.jpg', price: 'R$ 50,00' },
    { id: 2, title: 'Degrade + Barba', price: 'R$ 70,00' },
    { id: 3, title: 'Platinado', price: 'R$ 80,00' },
    { id: 4, title: 'Pigmentação', price: 'R$ 60,00' },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Selecionar
      </Button>
      <AntModal
        className='modal'
        title="Horários Disponíveis."
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Agendar"
        style={{
          width: '80%',  
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="note"
            label="Nome"
            rules={[
              {
                required: true,
                message: 'Por favor, insira o nome!',
              },
            ]}
          >
            <Input value={nome} onChange={(e) => setNome(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="horario"
            label="Horários"
            rules={[
              {
                required: true,
                message: 'Por favor, selecione um horário!',
              },
            ]}
          >
            <Select placeholder="Selecione um horário" allowClear>
              {horarios.map(horario => (
                <Option key={horario} value={horario}>
                  {horario}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
          {cards.map((card) => (
            <Card
              key={card.id}
              size="small"
              title={card.title}
              extra={<a href="#" onClick={() => handleCardClick(card.id)}>Selecionar</a>}
              style={{
                width: '250px',
                marginBottom: '16px',
                backgroundColor: '#E4F1FE',
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
