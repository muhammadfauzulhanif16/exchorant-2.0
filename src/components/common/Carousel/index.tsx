import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import { ImageList } from "./ImageList";
import "./index.scss";

interface Props {
  data: any;
}

interface Data {
  image: string;
  title: string;
  id: number;
}

export const Carousel = (props: Props) => {
  const { data } = props;

  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",
        speed: 100,
        autoplay: true,
      }}
    >
      {data.map((item: Data) => {
        const { image, title, id } = item;

        return (
          <SplideSlide key={id}>
            <img src={image} alt={title} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
