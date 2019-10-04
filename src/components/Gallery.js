import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/arquba.appspot.com/o/images%2FVentas%2FAptoColina170%2F6.jpeg?alt=media&token=fa1b192c-5e19-4b59-a705-f4659aa30dc0"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/arquba.appspot.com/o/images%2FVentas%2FAptoMadridEspa%C3%B1a%2Fsalon%20comedor%201.jpg?alt=media&token=db7c8833-683e-45c0-99d2-1d21fcd3f6e0"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/arquba.appspot.com/o/images%2FVentas%2FSandraGuillenApto%2F5.jpg?alt=media&token=e00b6077-55b5-4a99-b360-96e33ce7eb08"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
