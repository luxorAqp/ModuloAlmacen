import React from 'react';
import './DetailToStore.css'
const DetailToStore = () => {
    return (
        <div>
         <body className='bodyDetToStore'>
         <div className='containerDetToStore'>
         <div className='titleDetToStore'>Detalle de Productos</div>
              <form action="#">
                 <div className='detailsDetToStore'>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Código del encargado</span>
                       <input type="text" placeholder='0001' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Nombre del encargado</span>
                       <input type="text" placeholder='Juan Perez' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Codigo de almacen</span>
                       <input type="text" placeholder='0001 ' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Nombre Almacen</span>
                       <input type="text" placeholder='Almacen Moquegua' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Codigo de producto</span>
                       <input type="text" placeholder='0001 ' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Nombre Producto</span>
                       <input type="text" placeholder='Buscar Producto' required/>
                    </div>

                    <div className='divDetToStore'>
                       <span className='spanDetToStore'>Cantidad</span>
                       <input type="text" placeholder='Ingresar la cantidad' required/>
                    </div>

                   

                 </div>
                
                 <div className='buttomDetToStore'>
                    <input type="submit"  value="Agregar" />
                 </div>
                 
              </form>
      </div>
      </body>
      </div>
    );
};

export default DetailToStore;