import React from 'react';
import './ToPerson.css'
const ToPerson = () => {
    return (
        <div>
         <body className='bodyAssiPro'>
         <div className='containerAssiPro'>
         <div className='titleAssiPro'>Asignar Producto Almacenes</div>
              <form action="#">
                 <div className='detailsAssiPro'>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Código de Usuario</span>
                       <input type="text" placeholder='0001' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Nombre Usuario</span>
                       <input type="text" placeholder='Juan Perez' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Codigo Trabajador</span>
                       <input type="text" placeholder='29282928' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Nombre Trabajador</span>
                       <input type="text" placeholder='Torreblanca Zapata, Jorge' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Codigo Producto</span>
                       <input type="text" placeholder='Escoja el codigo' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Detalle Producto</span>
                       <input type="text" placeholder='------' required/>
                    </div>

                    <div className='divAssiPro'>
                       <span className='spanAssiPro'>Cantidad</span>
                       <input type="text" placeholder='0' required/>
                    </div>

                 </div>
                
                 <div className='buttomAssiPro'>
                    <input type="submit"  value="Registrar" />
                 </div>
                 <div className='buttomAssiPro'>
                    <input type="submit"  value="Agregar Almacen Origen" />
                 </div>
                 <div className='buttomAssiPro'>
                    <input type="submit"  value="Agregar Almacen Destino" />
                 </div>
              </form>
      </div>
      </body>
      </div>
    );
};

export default ToPerson;