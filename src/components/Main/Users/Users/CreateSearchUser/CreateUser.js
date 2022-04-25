import React from "react";
import "./CreateUser.css";
import { NavLink } from "react-router-dom";
const CreateUser = () => {
  return (
    <body className="bodyCreateUser">
      <header>
        <div className="containerCreateUser">
          <div className="itemCreateUser">
            <input className="inputSearchUser" type="text" />
            <button className="buttomSearchUser">Buscar Usuario</button>
          </div>
          <div className="itemCreateUser">
            <NavLink to="/registerUser" style={{ textDecoration: "none" }}>
              <button className="buttomCreateUser">Crear Usuario</button>
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <div className="mainCreateUser"></div>
      </main>
    </body>
  );
};

export default CreateUser;
