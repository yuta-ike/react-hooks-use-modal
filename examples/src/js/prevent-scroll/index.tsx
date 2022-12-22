import React from 'react';

import { useModal } from '../../../../src';

const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '60px 100px',
  borderRadius: '10px',
};

export const Modal = () => {
  const [renderModal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
  });

  return (
    <div>
      <div>Modal is Open? {isOpen ? 'Yes' : 'No'}</div>
      <button onClick={open}>OPEN</button>
      {renderModal(
        <div style={modalStyle}>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      )}
    </div>
  );
};
