import React from "react";
import "./ModalUsers.css";
import { NavLink } from "react-router-dom";

/* USO rsc  */
const ModalUsers = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal-users ${isOpen && "is-open"}`}>
      <div className="modal-container-users">
        <NavLink to="/users" style={{ textDecoration: "none" }}>
          <button className="butt-open-modal-users" onClick={closeModal}>
            Usuarios
          </button>
        </NavLink>

        <button className="butt-open-modal-users">Personal</button>
        {children}
      </div>
    </div>
  );
};

export default ModalUsers;
