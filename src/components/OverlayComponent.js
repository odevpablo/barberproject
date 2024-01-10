import React from 'react';
import { Modal } from 'antd';

const OverlayComponent = ({ visible, onClose }) => {
  return (
    <Modal
      title="Overlay Title"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <p>This is the overlay content.</p>
    </Modal>
  );
};

export default OverlayComponent;
