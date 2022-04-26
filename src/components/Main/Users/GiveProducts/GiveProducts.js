import React from "react";

const GiveProducts = () => {
  return (
    <div className="giveProducts-container">
      <div className="giveProducts-item"></div>
      <div className="titleGivPro">Entrega de Productos</div>
      <form action="">
        <div className="detailGivPro">
          <div className="divGivPr">
            <span className="spamGivPro">DNI</span>
            <input type="text" placeholder="Ingrese DNI" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">Nombres</span>
            <input type="text" placeholder="Ingrese DNI" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">Codigo Producto</span>
            <input type="text" placeholder="Ingrese Producto" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">Almacen</span>
            <input type="text" placeholder="Ingrese Almacen" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">Cantidad</span>
            <input type="text" placeholder="Ingrese DNI" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">Unidad</span>
            <input type="text" placeholder="Ingrese DNI" required />
          </div>
          <div className="divGivPr">
            <span className="spamGivPro">estado</span>
            <input type="text" placeholder="Ingrese DNI" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GiveProducts;
