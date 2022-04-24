import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

type TModalProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closable?: boolean;
  children: React.ReactNode;
};

Modal.setAppElement('#root');

const ModalWrap = ({
  isOpen,
  setIsOpen,
  closable = true,
  children,
}: TModalProp) => {
  const [scrollY, setScroll] = useState(0);

  const afterOpenModal = () => {
    document.body.style.cssText = `
        position: fixed;
        overflow-y: scroll;
        top: -${scrollY}px;
        width: 100%;
      `;
  };

  const afterCloseModal = () => {
    document.body.style.cssText = `
        position: static;
        overflow-y: auto;
        width: auto;
      `;
    window.scrollTo(0, scrollY);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) setScroll(window.scrollY);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onAfterClose={afterCloseModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {closable && (
        <CloseButtonWrap>
          <CloseButton onClick={closeModal}>
            <VscClose size={25} />
          </CloseButton>
        </CloseButtonWrap>
      )}
      {children}
    </Modal>
  );
};

export default ModalWrap;

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    overflow: 'inherit',
  },
};

/* ============================= */
/* ===== Styled Components ===== */
const CloseButtonWrap = styled.div`
  display: 'flex';
  justify-content: 'flex-end';
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  display: flex;
  background-color: transparent;
  border-radius: 2px;
  z-index: 2;
  &:hover {
    background-color: #00000010;
  }
`;
