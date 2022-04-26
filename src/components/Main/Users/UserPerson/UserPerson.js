import React from "react";
import { NavLink } from "react-router-dom";
const UserPerson = () => {
  return (
    <div>
      <div className="modal-container-managusers">
        <div className="modal-item-managusers">
          <NavLink to="/CreateUsers" style={{ textDecoration: "none" }}>
            <button className="butt-register">USUARIOS</button>
          </NavLink>
        </div>
        {/* <div className="modal-item-managusers">
          <button className="butt-register">PERSONAS</button>
        </div> */}
      </div>
    </div>
  );
};

export default UserPerson;
