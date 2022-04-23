import React from 'react';
import './RegisterRawMat.css'
const RegisterRawMat = () => {
    return (
        <div>
          <body className='bodyRegRawMat'>
            <div className='containerRegRawMat'>
               <div className='titleRegRawMat'>Registro  Materia Prima</div>
              <form action="#">
                 <div className='detailsRegRawMat'>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Código</span>
                       <input type="text" placeholder='Ingresa código' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Descripción</span>
                       <input type="text" placeholder='Ingresa descripción' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Cantidad</span>
                       <input type="text" placeholder='Ingresa cantidad ' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Unidad</span>
                       <input type="text" placeholder='Ingresa unidad' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Cantidad minima</span>
                       <input type="text" placeholder='Ingrese cantidad mínima ' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Periodo de vigencia</span>
                       <input type="text" placeholder='ingresar tiempo de validez' required/>
                    </div>

                    <div className='divRegRawMat'>
                       <span className='spanRegRawMat'>Fecha de ingreso</span>
                       <input type="date"  required/>
                    </div>

                 </div>
                
                 <div className='buttomRegRawMat'>
                    <input type="submit"  value="Registrar" />
                 </div>

                 <div className='buttomRegRawMat'>
                    <input type="submit"  value="Agregar nuevo  item" />
                 </div>
                 <div className='buttomRegRawMat'>
                    <input type="submit"  value="Agregar guia de remision" />
                 </div>

                 <div className='buttomRegRawMat'>
                    <input type="submit"  value="Agregar Herramientas y Equipos" />
                 </div>
              </form>
      </div>
      </body>
      </div>
    );
};

export default RegisterRawMat;