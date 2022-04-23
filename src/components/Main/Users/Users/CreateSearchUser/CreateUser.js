import React from 'react';
import './CreateUser.css'
const CreateUser = () => {
    return (
        <body className='bodyCreateUser'>
        <header>
           <div className='containerCreateUser'>
              <div className='itemCreateUser'>
                 <input className='inputSearchUser' type="text" />
                 <button className='buttomSearchUser'>
                    Buscar Usuario
                 </button>
              </div>
              <div className='itemCreateUser'>
                 <button className='buttomCreateUser'>
                    Crear Usuario
                 </button>
              </div>
           </div>
           
        </header>

        <main >
           <div className='mainCreateUser'>

           </div>
        </main>
     </body>
    );
};

export default CreateUser;