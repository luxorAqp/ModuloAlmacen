import React from 'react';
import "./RegisterPerPro.css"
const RegisterPerPro = () => {
    return (
        <div>
          <body className='bodyRegUser'>
         <div className='containerRegUser'>
         <div className='titleRegUser'>Registro de EPPS</div>
              <form action="#">
                 <div className='detailsRegUser'>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Código</span>
                       <input type="text" placeholder='Ingresa código' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Descripción</span>
                       <input type="text" placeholder='Ingresa descripción' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Cantidad</span>
                       <input type="text" placeholder='Ingresa cantidad ' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Unidad</span>
                       <input type="text" placeholder='Ingresa unidad' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Cantidad minima</span>
                       <input type="text" placeholder='Ingrese cantidad mínima ' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Periodo de vigencia</span>
                       <input type="text" placeholder='Ingresar tiempo de validez' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Fecha de ingreso</span>
                       <input type="date"  required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Precio unitario</span>
                       <input type="text" placeholder='Ingresar precio del producto' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>RUC proveedor</span>
                       <input type="text" placeholder='Ingresar el RUC del proveedor' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Nombre proveedor</span>
                       <input type="text" placeholder='Ingresar el nombre del proveedor' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Guia de remision</span>
                       <input type="text" placeholder='Ingresar guia de remision' required/>
                    </div>

                 </div>
                
                 <div className='buttomRegEPP'>
                    <input type="submit"  value="Registrar" />
                 </div>

                 <div className='buttomAddEPP'>
                    <input type="submit"  value="Agregar nuevo Item" />
                 </div>
                 
              </form>
      </div>
      </body>
      </div>
    );
};

export default RegisterPerPro;