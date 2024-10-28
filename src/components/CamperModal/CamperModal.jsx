import Modal from 'react-modal';
import css from './CamperModal.module.css';

Modal.setAppElement('#root');

const CamperModal = ({ isOpen, onClose, name, imgSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.header}>
        <h2>{name}</h2>
      </div>
      <div className={css.image}>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>No image available</p>}
      </div>
    </Modal>
  );
};

export default CamperModal;
