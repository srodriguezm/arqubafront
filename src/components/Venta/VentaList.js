import React, {Component} from 'react'
import Venta  from './Venta'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/list.css';

class VentaList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      ventas:[]
    };
  }

  componentDidMount() {
        axios.get('https://arquba-backend.herokuapp.com/venta')
            .then((response) => {
                var state = this.state;
                var ventas = response.data;
                state.ventas=ventas;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }
  render(){
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    return(
      <Masonry imagesLoadedOptions={imagesLoadedOptions}>
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.ventas.map( (prod)=> <Venta key={prod.id} data={prod}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default VentaList;
