import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CarouselComponent } from "../Carousel";
import styled from "styled-components";

export const Hero = () => {
  const ButtonStyled = styled.button`
    border-radius: 10rem;
  `;

  return (
    <div className="py-5">
      <Container>
        <Row className="flex-sm-row-reverse">
          <Col md className="mb-5 mb-md-0">
            <CarouselComponent />
          </Col>

          <Col className="align-items-center d-flex" md>
            <div>
              <h1 className="display-5 fw-bold mb-3">
                Find A Dish, Suit One's Taste
              </h1>

              <p className="fw-normal">
                Provides a variety of menu dishes from various contries,
                complete with recipes, how to make and others.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <ButtonStyled
                  type="button"
                  className="btn btn-primary py-3 px-5 me-md-2 shadow-lg"
                >
                  Show Me Now
                </ButtonStyled>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
