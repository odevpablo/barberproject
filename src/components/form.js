import React, { useEffect, useState } from 'react';
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

const FormBarber = () => {
  const [form] = Form.useForm();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/horarios')
      .then(response => response.json())
      .then(data => setHorarios(data))
      .catch(error => console.error('Erro ao obter horários:', error));
  }, []);

  const onFinish = (values) => {
    console.log(values);

    const { note, horario, customizeGender } = values;

    fetch('http://localhost:3001/api/salvarSelecao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ note, horario, customizeGender }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Lógica adicional, se necessário, após a conclusão da chamada à API
      })
      .catch(error => {
        console.error('Erro ao salvar seleção:', error);
      });

  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
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
        <Input />
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
  );
};

export default FormBarber;
