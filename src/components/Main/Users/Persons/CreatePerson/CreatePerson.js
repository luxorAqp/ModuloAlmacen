import React from 'react';
import './CreatePerson.css'
const CreatePerson = () => {
return (
      <div>
         <body className='bodyCreatePerson'>
         <header>
            <div className='containerCreatePerson'>
               <div className='itemCreatePerson'>
                  <input className='inputSearchPerson' type="text" />
                  <button className='buttomSearchPerson'>
                     Buscar Persona
                  </button>
               </div>
               <div className='itemCreatePerson'>
                  <button className='buttomCreatePerson'>
                     Crear Persona
                  </button>
               </div>
            </div>
            
         </header>

         <main >
            <div className='mainCreatePerson'>

            </div>
         </main>
      </body>
      </div>
   );
};

export default CreatePerson;