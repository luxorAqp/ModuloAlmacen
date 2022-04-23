import React from 'react';
import './RegisterPerson.css'
const RegisterPerson = () => {
    return (
        <body className='bodyRegPerson'>
      <div className='containerRegPerson'>
      <div className='titleRegPerson'>Registro de Personas</div>
           <form action="#">
              <div className='detailsRegPerson'>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>Nombres</span>
                    <input type="text" placeholder='Ingresa los nombres' required/>
                 </div>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>Apellidos</span>
                    <input type="text" placeholder='Ingresa los apellidos' required/>
                 </div>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>DNI</span>
                    <input type="text" placeholder='Ingresa el DNI ' required/>
                 </div>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>Celular</span>
                    <input type="text" placeholder='Ingresa el celular' required/>
                 </div>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>Asignar Almacen</span>
                    <input type="text" placeholder='Escoja almacen' required/>
                 </div>

                 <div className='divRegPerson'>
                    <span className='spanRegPerson'>Email</span>
                    <input type="text" placeholder='Ingresa el correo electronico' required/>
                 </div>
              </div>
              <div className='buttomRegPerson'>
                 <input type="submit"  value="Registrar" />
              </div>

              
           </form>
   </div>
   </body>
    );
};

export default RegisterPerson;