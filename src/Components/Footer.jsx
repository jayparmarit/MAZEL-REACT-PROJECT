import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";

const Footer = () => {
  return (
    <>
      <Container className="mt-5 mb-5 ">
        <Row>
          <h2 className="mb-5 fs-2  text-center border-bottom pb-3 mt-5">
            CONTACT
          </h2>
          <Col className="bg-secondary  ">
            {/* <Image style={{height:"500px"}} className="w-100" src="https://theme.nileforest.com/html/mazel-v3.1/03_mazel_onepage/img/full/20.jpg">
            </Image> */}
            <div>
              <p className="text-center text-warning mt-5">WANNA SAY HELLOWWW?</p>
              <h2 className="mb-4 fs-1 fw-bold text-center text-white mb-2">
                GET IN
                <span className="fs-3 text-white ms-3">TOUCH</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="bg-secondary">
            <Form className="">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1" style={{}}
              >
                <Form.Control type="text" placeholder="Your Name" style={{width:"500px",margin:"auto"}}/>
                <br />
                <Form.Control type="email" placeholder="Email" style={{width:"500px",margin:"auto"}}/>
                <br />
                <Form.Control type="text" placeholder="Subject" style={{width:"500px",margin:"auto"}}/>
              </Form.Group>
            </Form>
          </Col>
          <Col md={6} className="bg-secondary">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Your Message" rows={6} style={{width:"500px"}}/>
              </Form.Group>
            </Form>
             <button className="w-25 m-auto p-2 rounded bg-secondary border mb-2 text-black">submit</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
