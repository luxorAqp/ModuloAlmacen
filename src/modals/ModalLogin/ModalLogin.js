import "./ModalLogin.css";
import { NavLink } from "react-router-dom";

/* USO rsc  */
const ModalLogin = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal-login ${isOpen && "is-open"}`}>
      <div className="modal-container">
        <div className="login-item">
          <h1 className="title">Iniciar sesion</h1>
        </div>

        <div className="login-item">
          <input className="input-login" type="text" name="" required />
          <span className="bar"></span>
          <label htmlFor="">Usuario</label>
        </div>

        <div className="login-item">
          <input className="input-login" type="password" name="" required />
          <span className="bar"></span>
          <label htmlFor="">Password</label>
        </div>
        <div>
          <NavLink to="/main" style={{ textDecoration: "none" }}>
            <button className="butt-login" onClick={closeModal}>
              Ingresar
            </button>
          </NavLink>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalLogin;
