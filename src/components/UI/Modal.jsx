import classes from './Modal.module.css';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className='classes.content'>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {/* 위에 처럼 사용하면 루트 요소에 들어감 */}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}

      {/* 배경 눌러도 모달창이 닫히게 프롭전달 */}
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
