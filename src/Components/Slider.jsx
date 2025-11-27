import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DarkVariantExample() {
  return (
    <>
      <Container fluid className="mb-5 pb-5 mt-5 pt-5">
         <Row>
            <Col>
                 <Carousel data-bs-theme="dark" interval={1000}>
          <Carousel.Item style={{height:"400px",objectFit:"cover"}}>
            <img
              className="d-block w-100"
              src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/full/05.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-white fw-bold">Jeff Dunham </h3>
              <p className="text-white fs-6">I got a dummy for Christmas and started teaching myself. I got books and records and sat in front of the practising.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"400px",objectFit:"cover"}}>
            <img
              className="d-block w-100"
              src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/full/33.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="text-white fw-bold">Alexander Theroux </h3>
              <p className="text-white fs-6">you can never eat a pet you name. And anyway, I did my first show in the third grade it would be like a ventriloquist.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"400px",objectFit:"cover"}}>
            <img
              className="d-block w-100"
              src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/full/02.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="text-black fw-bold">Adam Savage </h3>
              <p className="text-black fs-6">
               We're not leaving here without Buster, man. Leave no crash-test dummy behind!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            </Col>
         </Row>
      </Container>
    </>
  );
}

export default DarkVariantExample;
