import React from 'react';
import './RegisterUser.css'
const RegisterUser = () => {
    return (
        <div>
            <body className='bodyRegUser'>
         <div className='containerRegUser'>
         <div className='titleRegUser'>Registro de Usuario</div>
              <form action="#">
                 <div className='detailsRegUser'>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Nombres</span>
                       <input type="text" placeholder='Ingresa los nombres' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Apellidos</span>
                       <input type="text" placeholder='Ingresa los apellidos' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>DNI</span>
                       <input type="text" placeholder='Ingresa el DNI ' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Celular</span>
                       <input type="text" placeholder='Ingresa el celular' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Nivel de usuario</span>
                       <input type="text" placeholder='Elige el nivel de usuario' required/>
                    </div>

                    <div className='divRegUser'>
                       <span className='spanRegUser'>Email</span>
                       <input type="text" placeholder='Ingresa el correo electronico' required/>
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

export default RegisterUser;