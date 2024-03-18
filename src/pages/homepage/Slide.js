import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import calculator from "../../images/calculator.avif";
import exportImg from "../../images/exportPic.avif";
import importImg from "../../images/importPic.avif";

export default function Slide() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className="d-block w-100 h-20 overflow-hidden">
          <Image
            src={calculator}
            style={{
              height: "300px",
              width: "100vw",
              objectFit: "cover",
              objectPosition: "center",
            }}
            fluid
          />
        </div>
        <Carousel.Caption>
          <h2>Duty Calculator Tool</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={importImg}
          className="d-block w-100"
          style={{
            height: "300px",
            width: "100vw",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Import Classification Tool</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={exportImg}
          className="d-block w-100"
          style={{
            height: "300px",
            width: "100vw",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="..."
        />
        <Carousel.Caption>
          <h2>Export Classification Tool</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
