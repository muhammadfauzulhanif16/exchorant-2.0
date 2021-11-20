import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CarouselStyled = styled(Carousel)`
  .carousel-inner {
    border-radius: 1.5rem;
  }

  .carousel-indicators button {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }

  .carousel-item {
    width: 100%;
    height: 300px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover !important;
`;
