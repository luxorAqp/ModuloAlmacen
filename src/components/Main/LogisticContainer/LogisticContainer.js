import React from 'react';
import "./LogisticContainer.css"
const LogisticContainer = () => {
    return (
        <div className='logistic-container'>
         <div className='logistic-item'>
            <button className='logistic-button users'>USUARIOS</button>
         </div>

         <div className='logistic-item'>
            <button className='logistic-button store'>ALMACENES</button>
         </div>

         <div className='logistic-item'>
            <button className='logistic-button product'>PRODUCTOS</button>
         </div>
      </div>
    );
};

export default LogisticContainer;