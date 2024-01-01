import React from 'react';
import { Card, Space, Rate } from 'antd';
import MarcarHorario from './modal';

interface Barber {
  name: string;
  rating: number;
  imagem: string;
}

const { Meta } = Card;

const barbers: Barber[] = [
  {
    name: 'Emerson',
    rating: 5,
    imagem: 'https://pbs.twimg.com/media/FjyUf_NXkAI4QAI?format=png&name=360x360',
  },
];

const OptionsBarber = () => {
  const { name, rating, imagem } = barbers[0];

  return (
    <Space direction="vertical" size={16}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={imagem} />}
      >
        <Meta title={name} />
        <Rate defaultValue={rating} />
      </Card>
      <MarcarHorario />
    </Space>
  );
};

export default OptionsBarber;
