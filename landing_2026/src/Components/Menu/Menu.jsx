import { useState } from 'react'
import './styles.css'
const Menu = () => {
  const [ verMenu, setVerMenu ] = useState(false)
  const manejarMenu = () => {
    if (!verMenu) {
      window.scrollTo(10, 500)
    }
    setVerMenu(!verMenu)
  }
  return (
    <div className='menu-body'>
    <menu className='menu'>
      <li className="menu-elemento">
        <button id='main' >Main</button>
      </li>
      <li className="menu-elemento">
        <button id='profesion'>Profesión</button>
      </li>
      <li className="menu-elemento">
        <button id='pasion' >Pasión</button>
      </li>
      <li className="menu-elemento">
        <button id='personal' >Personal</button>
      </li>
    </menu>

      <menu className='menu-cellphone'>
        <li className="menu-elemento esconder-ver"
          onClick={() => manejarMenu()}>
            {
              verMenu ? (
              <p style={{padding:"0.2em"}}>X</p>
              ) : (
                  <div className='por-que-no-dibujar'>
                    <div className='linea'></div>
                    <div className='linea'></div>
                    <div className='linea'></div>
                  </div>
              )
            }
        </li>
          <li className={verMenu ? "menu-elemento" : "esconder"}>
            <button id='main' >Main</button>
          </li>
          <li className={verMenu ? "menu-elemento" : "esconder"}>
            <button id='profesion'>Profesión</button>
          </li>
          <li className={verMenu ? "menu-elemento" : "esconder"}>
            <button id='pasion' >Pasión</button>
          </li>
          <li className={verMenu ? "menu-elemento" : "esconder"}>
            <button id='personal' >Personal</button>
          </li>
      </menu>
    </div>
  )

}


export default Menu
