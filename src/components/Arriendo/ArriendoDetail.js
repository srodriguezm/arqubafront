import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from "mdbreact";
import ReactPlayer from 'react-player';
import '../css/detail.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Gallery from 'react-grid-gallery';
import "../../../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';
class ArriendoDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id: 1,
      fotos:  [],
      titulo: "",
      descripcion: "",
      banios: 2,
      area: 290,
      estrato: 5,
      parqueaderos: 1,
      habitaciones: 6,
      sector: "El Batán",
      mensualidad: 850000,
      serviciosIncluidos: "gas,telefono,luz,agua",
      latitud: 4.703969,
      longitud: -74.059147,
      video:"",
      fi:0,
      portada:{},
      f1:"",
      numerofotos:0,
      tipo:""
    };
  }


  componentDidMount() {
        var id=this.props.match.params.idArriendo;
            console.log(id);
            axios.get('https://arquba-backend.herokuapp.com/arriendo/'+id)
                .then((response) => {
                    var state = this.state;
                    var producto = response.data;
                    console.log(producto);
                    state.id = id;
                    state.fotos = producto.fotos;
                    state.titulo = producto.titulo;
                    state.descripcion = producto.descripcion;
                    state.banios = producto.banios;
                    state.area = producto.area;
                    state.estrato = producto.estrato;
                    state.parqueaderos = producto.parqueaderos;
                    state.habitaciones = producto.habitaciones;
                    state.sector = producto.sector;
                    state.mensualidad = producto.mensualidad;
                    state.serviciosIncluidos = producto.serviciosIncluidos;
                    state.latitud = producto.latitud;
                    state.longitud = producto.longitud;
                    state.pagina = 0;
                    state.portada = producto.fotos[0];
                    state.f1 = state.portada.src;
                    state.numerofotos = state.fotos.length;
                    state.video = producto.video;
                    state.tipo =producto.tipo;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                    console.log(state.numerofotos);
                });
    }
  render(){
    var imgUrl_1= this.state.f1;
    console.log(imgUrl_1);
    console.log(this.state.numerofotos);
    const divStyle={
        backgroundImage: 'url("'+this.state.f1+'")'
    };
    const numim=this.state.numerofotos;
    const Carrusel=()=>{
      const numero=this.state.numerofotos;
      return <MDBContainer className="w-50" >
        <MDBCarousel activeItem={1}  length={numero} showControls={true} showIndicators={false} className="z-depth-1" thumbnails>
          <MDBCarouselInner>
            {this.state.fotos.map( (foto)=> <MDBCarouselItem itemId={foto.id}>
                                              <img className="w-100" src={foto.src} alt="slide" />
                                            </MDBCarouselItem>)}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    };
    const Play=()=>{
      if(this.state.video!="")
      {
        return <div className="row">
        <div className="col-12">
        <Player
playsInline
src={this.state.video}
/>
        </div>
        </div>
      }
      else{
          return <div className="row">
          <div className="col-12">
          </div>
          </div>
      }
    }
    const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

    return(
      <div>
      <div className="site-blocks-cover inner-page-cover overlay" style={divStyle} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <span className="d-inline-block text-white px-3 mb-3 property-offer-type rounded">Detalles de la pripiedad en Arriendo</span>
              <h1 className="mb-2">{this.state.titulo}</h1>
              <p className="mb-5"><strong className="h2 text-success font-weight-bold">{this.state.mensualidad}</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fuid d-flex justify-content-center">
        <div className="container">
          <div className="row ">
            <div>
              <Carrusel/>
              <div className="bg-white property-body border-bottom border-left border-right">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <strong className="text-success h1 mb-3">${this.state.mensualidad}</strong>
                  </div>
                  <div className="col-md-6">
                    <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                    <li>
                      <span className="property-specs">Habitaciones</span>
                      <span className="property-specs-number">{this.state.habitaciones}<sup></sup></span>

                    </li>
                    <li>
                      <span className="property-specs">Baños</span>
                      <span className="property-specs-number">{this.state.banios}</span>

                    </li>
                    <li>
                      <span className="property-specs">Area en m2</span>
                      <span className="property-specs-number">{this.state.area}</span>

                    </li>
                  </ul>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span className="d-inline-block text-black mb-0 caption-text">Tipo de propiedad</span>
                    <strong className="d-block">{this.state.tipo}</strong>
                  </div>
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span className="d-inline-block text-black mb-0 caption-text">Incluye</span>
                    <strong className="d-block">{this.state.serviciosIncluidos}</strong>
                  </div>
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span className="d-inline-block text-black mb-0 caption-text">Estrato</span>
                    <strong className="d-block">{this.state.estrato}</strong>
                  </div>
                </div>
                <h2 className="h4 text-black">Detalles de la pripiedad en Arriendo</h2>
                <p>{this.state.descripcion}</p>

                <div className="row no-gutters mt-5">
                  <div className="col-12">
                    <h2 className="h4 text-black mb-3">Gallery</h2>
                  </div>
                  {this.state.fotos.map( (foto)=> <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <img src={foto.src} alt="Image" className="img-fluid"/>
                                                  </div>)}
                </div>
                <Play/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ArriendoDetail;
