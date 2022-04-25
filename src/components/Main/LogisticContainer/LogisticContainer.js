import React from "react";
import { useModal } from "../../../hooks/useModal";
import ModalUsers from "../../../modals/ModalUsers/ModalUsers";
import "./LogisticContainer.css";
const LogisticContainer = () => {
  const [isOpenModalUsers, openModalUsers, closeModalUsers] = useModal(false);
  return (
    <div className="logistic-container">
      <div className="logistic-item">
        <button onClick={openModalUsers} className="logistic-button users">
          USUARIOS
        </button>
      </div>

      <div className="logistic-item">
        <button className="logistic-button store">ALMACENES</button>
      </div>
      <ModalUsers
        isOpen={isOpenModalUsers}
        closeModal={closeModalUsers}
      ></ModalUsers>

      <div className="logistic-item">
        <button className="logistic-button product">PRODUCTOS</button>
      </div>
    </div>
  );
};

export default LogisticContainer;
