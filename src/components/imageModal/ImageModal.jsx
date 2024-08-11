import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ urls, alt_description, isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      maxWidth: "80%",
      maxHeight: "80%",
      margin: "auto",
      padding: 0,
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className={css.modalContent}>
        <img src={urls} alt={alt_description} className={css.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;

Modal.setAppElement("#root");
