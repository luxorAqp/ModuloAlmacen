import React from "react";
import { useModal } from "../../../hooks/useModal";
import ModalLogin from "../../../modals/ModalLogin/ModalLogin";
import "./HeaderLogin.css";
const HeaderLogin = () => {
  const [isOpenModalLogin, openModalLogin, closeModalLogin] = useModal(false);
  return (
    <div>
      <div className="header-container">
        <div className="header-item logo">
          <img src="./spider.png" alt="logo" />
        </div>
        <div className="header-item buttom">
          <div className="container-login">
            <button onClick={openModalLogin} className="buttom-login">
              Iniciar sesión
            </button>
          </div>
          <ModalLogin
            isOpen={isOpenModalLogin}
            closeModal={closeModalLogin}
          ></ModalLogin>
        </div>
      </div>
      <hr className="hr-separator" />
    </div>
  );
};

export default HeaderLogin;
