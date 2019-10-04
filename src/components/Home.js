import React, {Component} from 'react'
import './css/style2.css';
import {Link} from 'react-router-dom';
import CarouselPage from './Gallery'

class Home extends Component{

    render(){
        return(
            <div>
            <section className="banner_part">
      <div className="container">
         <div className="row">
            <div className="col-lg-5 offset-lg-1 col-sm-8 offset-sm-2">
               <div className="banner_text aling-items-center">
                  <div className="banner_text_iner">
                     <h5>Somos</h5>
                     <h2>Arquba <br/>
                        Proyectos Inmobiliarios</h2>
                     <p>Arquba Proyectos Inmobiliarios SAS, surge en el año 2018 como una alternativa para la gestión inmobiliaria,
                      el diseño arquitectónico, construcción, remodelación y la provisión de servicios profesionales asociados. </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="about_part section-padding">
      <div className="container">
         <div className="row">
            <div className="section_tittle" id="QS">
               <h2><span>¿Quiénes</span> somos?</h2>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-6 col-md-6">
               <div className="about_img">
                  <img className="imagenabout" src="https://cdn.pixabay.com/photo/2016/03/09/15/23/building-1246624_960_720.jpg" alt=""/>
               </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-sm-8 col-md-6">
               <div className="about_text">
                  <h2>Hola Colombia, somos
                     líderes en <span>gestión inmobiliaria.</span></h2>
                  <p>Arquba Proyectos inmobiliarios SAS, cuenta con arquitectos,
                  ingenieros civiles, publicistas, mercadólogos, sicólogos, abogados
                  e Ingenieros de sistemas con amplio bagaje para un trabajo interdisciplinario
                  que asegure el éxito de los servicios que ofrece. </p>
                  <a href="/#coso" className="btn_1">Ver más</a>
                  <div className="about_part_counter">
                     <div className="single_counter">
                        <span className="counter">+</span>
                        <p>ventas</p>
                     </div>
                     <div className="single_counter">
                        <span className="counter">+</span>
                        <p>arriendos</p>
                     </div>
                     <div className="single_counter">
                        <span className="counter">+</span>
                        <p>proyectos</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="portfolio_area pt_30 padding_bottom" id="coso">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="section_tittle">
                  <h2><span>Nuestro</span> Proyecto</h2>
               </div>
               <div className="portfolio-filter">
                  <h2>Hola Colombia, somos <br/>
                        lideres en <span>gestión inmobiliaria.</span></h2>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                     <li>
                        <a className="active" id="Architecture-tab" data-toggle="tab" href="#Architecture" role="tab"
                           aria-controls="Architecture" aria-selected="true">
                           Arquitectura
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="portfolio_item tab-content" id="myTabContent">
                  <div className="row align-items-center justify-content-between tab-pane fade show active"
                     id="Architecture" role="tabpanel" aria-labelledby="Architecture-tab">
                     <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="portfolio_box">
                           <a href="img/project-1.png" className="img-gal">
                              <div className="single_portfolio">
                                 <img className="img-fluid w-100" src="https://i.ibb.co/80SyDKK/cheveres.jpg" alt=""/>
                              </div>
                           </a>
                           <div className="short_info">
                              <p>Proropiedades en Arriendo</p>
                              <h4><a href="/ArriendoList">A un paso <br/>
                                    de encontrar tu nuevo hogar.</a></h4>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5 col-md-6">
                        <div className="row">
                           <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                              <div className="portfolio_box">
                                 <a href="img/project-2.png" className="img-gal">
                                    <div className="single_portfolio">
                                       <img className="img-fluid w-100" src="https://i.ibb.co/4gmvLzL/remake.jpg" alt=""/>
                                    </div>
                                 </a>
                                 <div className="short_info">
                                    <p>Proyectos de remodelación</p>
                                    <h4><a href="https://api.whatsapp.com/send?phone=573102046676&text=Escr%C3%ADbeme.%20Quiero%20informaci%C3%B3n%20acerca%20de%20Arquba">A un paso <br/>
                                          de agendar tu cita.</a></h4>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                              <div className="portfolio_box">
                                 <a href="img/project-3.png" className="img-gal">
                                    <div className="single_portfolio">
                                       <img className="img-fluid w-100" src="https://i.ibb.co/k4N8s1z/venta.jpg" alt=""/>
                                    </div>
                                 </a>
                                 <div className="short_info">
                                    <p>Propiedades en venta</p>
                                    <h4><a href="/VetaList">A un paso <br/>
                                          de comprar una propiedad.</a></h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="service_part">
      <div className="container">
         <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 col-xl-6">
               <div className="section_tittle" id="Sr">
                  <h2>Nuestros <span>Servicios</span></h2>
               </div>
               <div className="service_part_iner">
                  <div className="row">
                     <div className="col-lg-6 col-sm-6">
                        <div className="single_service_text ">
                           <img src="https://i.ibb.co/nr91Z0f/rompec.png" alt=""/>
                           <h4>Remodelado</h4>
                           <br/>
                           <p>Con nuestra experiencia de arquitectura y diseño deja que tu hogar tenga una nueva cara.</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-6">
                        <div className="single_service_text">
                           <img src="https://i.ibb.co/SwsCgm6/hook.png" alt=""/>
                           <h4>Construcción</h4>
                           <br/>
                           <p>Estamos en capacidad de asumir proyectos de construcción para tanto para sector público como para privado.</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-6">
                        <div className="single_service_text">
                           <img src="https://i.ibb.co/TH3QjB6/home.png" alt=""/>
                           <h4>Diseño</h4>
                           <br/>
                           <p>Arquba puede atender sus necesidades de cambios en espacios habitables tanto en lo estético como en lo tecnológico.</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-6">
                        <div className="single_service_text">
                           <img src="https://i.ibb.co/TLbmmJy/sale.png" alt=""/>
                           <h4>Ventas &
                              Arriendo</h4>
                           <p>Ofrecemos un portafolio de de soluciones integrales y oportunas para la gestión inmobiliaria.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-sm-10">
               <div className="service_text">
                  <h2>Hola Colombia, somos
                    lideres en <span>Servicios.</span></h2>
                  <p>Según las necesidades y las soluciones que nos demanden sus proyectos, Arquba Proyectos inmobiliarios dará una respuesta oportuna y de calidad. </p>
                  <a href="service.html" className="btn_1">Conoce más</a>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="project_gallery section-padding">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="project_gallery_tittle">
                  <h2>Algunas <span>Propiedades</span></h2>
               </div>
               <div className="grid">
               <CarouselPage/>
               </div>
            </div>
         </div>
      </div>
   </section>

   <footer className="footer_part">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="footer_logo">
                     <a href="index.html" className="footer_logo_iner"> <img src="https://static.wixstatic.com/media/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.png/v1/fill/w_212,h_164,al_c,q_80,usm_0.66_1.00_0.01/37cd03_69302b01e64d4a91953c3abc207558d7~mv2_d_1650_1275_s_2.webp" alt="#"/> </a>
               </div>
            </div>

            <div className="col-sm-6 col-lg-3">
               <div className="single_footer_part" id="ctc">
                  <h4>Más acerca de nosotros</h4>
                  <p>Siguenos en nuestras redes sociales</p>
                  <div className="footer_icon social_icon">
                  <div className="container">
                     <ul className="list-unstyled">
                        <li><a href="https://www.facebook.com/Arquba.Proyectos.In" className="single_social_icon"><img src="https://i.ibb.co/9NqCs6C/facebook.png" /> </a></li>
                        <li><a href="https://www.instagram.com/arqubaproyectos/" className="single_social_icon"><img src="https://i.ibb.co/p1snwkg/instagram.png" /></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=573102046676&text=Escr%C3%ADbeme.%20Quiero%20informaci%C3%B3n%20acerca%20de%20Arquba" className="single_social_icon"><img src="https://i.ibb.co/jvRS7NY/whatsapp.png" /></a></li>
                     </ul>
                  </div>
                  </div>
               </div>
            </div>
            <div className="col-sm-6 col-lg-3">
               <div className="single_footer_part">
                  <h4>Contacto</h4>
                  <p>Teléfono: +57 3102046676</p>
                  <p>Email: arqubaproyectos@gmail.com</p>
               </div>
            </div>
            <div className="col-sm-6 col-lg-3">
               <div className="single_footer_part">
                  <h4>Links Importantes</h4>
                  <ul className="list-unstyled">
                  </ul>
               </div>
            </div>
            <div className="col-sm-6 col-lg-3">
               <div className="single_footer_part">
                  <h4>WhatsApp</h4>
                  <p>Texto
                  </p>
                  <div id="mc_embed_signup">
                     <form target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get" className="subscribe_form relative mail_part" required>
                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                           className="placeholder hide-on-focus" onFocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '"
                           required="" type="email"/>
                        <button type="submit" name="submit" id="newsletter-submit"
                           className="email_icon newsletter-submit button-contactForm"><i
                              className="far fa-paper-plane">Go</i></button>
                        <div className="mt-10 info"></div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</div>
        );
    }
}
export default Home;
