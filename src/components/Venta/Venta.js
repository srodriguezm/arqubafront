import React, { Component } from 'react';
import '../css/card-style.css';
import {Link} from 'react-router-dom';
class Venta extends Component{
  render(){
    const divStyle={
        backgroundImage: 'url("'+this.props.data.fotos[0].src+'")'
    };
    return(
      <Link to={{
          pathname:"/VentaDetail/"+this.props.data.id,
        }} data={this.props.data}>
      <div class="prop-card">
        <div class="img-container" style={divStyle}>
          <h3 class="prop-state">Venta</h3>
        </div>
        <div class="prop-info">
          <h2 class="prop-title">{this.props.data.titulo}</h2>
          <h3 class="prop-address">{this.props.data.sector}</h3>
          <p class="prop-price">${this.props.data.valor}</p>
        </div>
        <div class="prop-aditional">
          <div class="additional-sec">
            <p class="prop-numb">{this.props.data.habitaciones}</p>
            <p class="prop-text"><img src="https://i.ibb.co/g4M8Rr1/bed.png" alt=""/></p>
          </div>
          <div class="additional-sec">
            <p class="prop-numb">{this.props.data.area}</p>
            <p class="prop-text"><img src="https://i.ibb.co/GFmXFkF/area.png" alt=""/></p>
          </div>
          <div class="additional-sec">
            <p class="prop-numb">{this.props.data.banios}</p>
            <p class="prop-text"><img src="https://i.ibb.co/4fshTyX/toilet.png" alt=""/></p>
          </div>
          <div class="additional-sec">
            <p class="prop-numb">{this.props.data.parqueaderos}</p>
            <p class="prop-text"><img src="https://i.ibb.co/4Z32XMp/parking-sign.png" alt=""/></p>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}
export default Venta;
