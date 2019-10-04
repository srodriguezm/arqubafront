import React, {Component} from 'react'
import './css/paginita.css';

class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark static-top purple">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="https://static.wixstatic.com/media/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.png/v1/fill/w_212,h_164,al_c,q_80,usm_0.66_1.00_0.01/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.webp"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#QS">¿Quiénes somos?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Sr">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ArriendoList">Arriendo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/VentaList">Venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#ctc">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://api.whatsapp.com/send?phone=573102046676&text=Escr%C3%ADbeme.%20Quiero%20informaci%C3%B3n%20acerca%20de%20Arquba"><img src="https://i.ibb.co/CBXnT4H/whatsapp.png" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    )
  }
}
export default NavBar;
