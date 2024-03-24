import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { slideData } from "../../store/data";

export default function Slide() {
  return (
    <Carousel slide={false}>
      {slideData.map((slide, index) => {
        return (
          <Carousel.Item key={index}>
            <Image
              src={slide.slideImg}
              className="d-block w-100 object-fit-cover object-position-center vh-100"
              alt={slide.alt}
              fluid
            />
            <Carousel.Caption className="top-50">
              <h1 className="bg-dark p-3 d-inline bg-opacity-50 fw-bold">
                {slide.title}
              </h1>
              <p className="m-3 fs-3">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
