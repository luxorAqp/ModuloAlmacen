import "./ModalUsePer.css";

const ModalUsePer = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal-useper ${isOpen && "is-open"}`}>
      <div className="modal-container-useper">
        <div className="modal-item-useper">
          <button>USUARIOS</button>
        </div>
        <div className="modal-item-useper">
          <button>PERSONAL</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ModalUsePer;
