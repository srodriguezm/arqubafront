import React, {Component} from 'react'
import './css/paginita.css';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import  {Button} from 'react-bootstrap';
import  {FormControl} from 'react-bootstrap';
class ResponsiveNavBar extends Component{
  render(){
    return(
      <Navbar collapseOnSelect className="navbar navbar-expand-lg navbar-dark purple" expand="lg" variant="dark">
      <div className="container">
  <Navbar.Brand href="/"><img src="https://static.wixstatic.com/media/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.png/v1/fill/w_212,h_164,al_c,q_80,usm_0.66_1.00_0.01/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.webp"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar-nav ml-auto" >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/#QS">¿Quiénes somos?</Nav.Link>
      <Nav.Link href="/#Sr">Servicios</Nav.Link>
      <Nav.Link href="/ArriendoList">Arriendo</Nav.Link>
      <Nav.Link href="/VentaList">Venta</Nav.Link>
      <Nav.Link href="/#ctc">Contacto</Nav.Link>
      <Nav.Link href="https://api.whatsapp.com/send?phone=573102046676&text=Escr%C3%ADbeme.%20Quiero%20informaci%C3%B3n%20acerca%20de%20Arquba"><img src="https://i.ibb.co/CBXnT4H/whatsapp.png" /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    )
  }
}
export default ResponsiveNavBar;
