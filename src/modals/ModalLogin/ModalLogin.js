import "./ModalLogin.css"
import {NavLink, Link} from 'react-router-dom'


const ModalLogin = ({children, isOpen, closeModal}) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`}>

        <div className="modal-container">
          <div className='login-item'>
            <h1 className='title'>Iniciar sesion</h1>
          </div>

          <div className='login-item'>
            <input className='input-login' type="text"    name='' required/>
            <span className='bar'></span>
            <label htmlFor="">Usuario</label>
          </div>

          <div className='login-item'>
            <input className='input-login' type="password" name='' required />
            <span className='bar'></span>
            <label htmlFor="">Password</label>
          </div>
              <div >
                  <Link to='/main'style={{ textDecoration: 'none' }}>
                    <button className="butt-login">Ingresar</button>
                  </Link>
              </div>
            {children}
        </div>

    </div>
  )
}

export default ModalLogin