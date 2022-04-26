import "./ModalUsers.css";
import { NavLink } from "react-router-dom";
/* USO rsc  */
const ModalUsers = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal-manausers ${isOpen && "is-open"}`}>
      <div className="modal-container-managusers">
        <div className="modal-item-managusers">
          <NavLink to="/CreateUsers" style={{ textDecoration: "none" }}>
            <button onClick={closeModal} className="butt-register">
              Registro
            </button>
          </NavLink>
        </div>
        <div className="modal-item-managusers">
          <NavLink to="/GiveProducts" style={{ textDecoration: "none" }}>
            <button onClick={closeModal} className="butt-register">
              Entrega
            </button>
          </NavLink>
        </div>
      </div>
      {children}
    </div>
  );
};
export default ModalUsers;
