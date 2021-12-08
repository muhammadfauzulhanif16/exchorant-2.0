import React from "react";
import { Carousel } from "../../../Carousel";
import "./style.scss";
import { Button, Row, Col, Container } from "react-bootstrap";

export const Hero = () => {
  return (
    <Container fluid className="container-md pe-0">
      <Row className="vh-60">
        <Col className="d-flex flex-column justify-content-center">
          <h1 className="text-dark-gray-5b5555">
            <span className="text-red-e5646e">Delicious dishes</span> from all
            over the world
          </h1>

          <p className="fw-500 my-4 col-10 text-gray-766e6e">
            A variety of upscale food & drinks with selected 5-star quality
            ingredients from various corners of the country that you will not be
            able to find anywhere.
          </p>

          <Button size="lg" className="shadow-lg col-6 py-3 fs-6 border-0">
            Looking for a Dish
          </Button>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};
