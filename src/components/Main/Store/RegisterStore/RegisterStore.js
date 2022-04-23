import React from 'react';
import './RegisterStore.css'
const RegisterStore = () => {
    return (
        <div>
            <body className='bodyRegStore'>
                <div className='containerRegStore'>
                    <div className='titleRegStore'>Registro de almacen</div>
                    <form>
                        <div className='detailsRegStore'>
                            
                            <div className='divRegStore'>
                                <span className='spanRegStore'>Código de almacen</span>
                                <input type="text" placeholder='Ingresa codigo' required/>
                            </div>

                            <div className='divRegStore'>
                                <span className='spanRegStore'>Ciudad de almacen</span>
                                <input type="text" placeholder='Ingresa ciudad' required/>
                            </div>

                            <div className='divRegStore'>
                                <span className='spanRegStore'>Direccion de almacen</span>
                                <input type="text" placeholder='Ingresa direccion' required/>
                            </div>
                        </div>
                        <div className='buttomRegUser'>
                    <input type="submit"  value="Registrar" />
                </div>
                    </form>
                </div>
            </body>
        </div>
    );
};

export default RegisterStore;