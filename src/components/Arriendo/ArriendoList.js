import React, {Component} from 'react'
import Arriendo  from './Arriendo'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/list.css';

class ArriendoList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      arriendos:[]
    };
  }

  componentDidMount() {
        axios.get('https://arquba-backend.herokuapp.com/arriendo')
            .then((response) => {
                var state = this.state;
                var arriendos = response.data;
                state.arriendos=arriendos;
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
          {this.state.arriendos.map( (prod)=> <Arriendo key={prod.id} data={prod}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default ArriendoList;
