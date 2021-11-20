import { Carousel } from "react-bootstrap";
import { CarouselStyled, ImageStyled } from "./Styled";
import { Image } from "./Image";

export const CarouselComponent = () => {
  const { Item } = Carousel;

  return (
    <CarouselStyled interval={2000}>
      {Image.map(({ src, alt }) => {
        return (
          <Item>
            <ImageStyled src={src} alt={alt} />
          </Item>
        );
      })}
    </CarouselStyled>
  );
};
