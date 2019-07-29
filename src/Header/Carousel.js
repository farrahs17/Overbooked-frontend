import React from "react";
import Carousel from "react-bootstrap/Carousel";
import musicImg from "../assets/img1.jpeg";
import artImg from "../assets/img2.jpeg";
import sportImg from "../assets/img3.jpeg";
import bussImg from "../assets/img4.jpeg";
import fashionImg from "../assets/img5.jpeg";
import cinemaImg from "../assets/img7.jpeg";
import "./header.scss";
const CarouselComp = () => {
  return (
    <div>
      <Carousel className="w-70">
        <Carousel.Item>
          <img className="d-block w-100 " src={musicImg} alt="Music Event" />
          <Carousel.Caption>
            <h3>Music Events</h3>
            <p>Book all types of Music events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={artImg} alt="Art Events" />

          <Carousel.Caption>
            <h3>Art Events</h3>
            <p>Book all types of Art events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sportImg} alt="Sports Events" />

          <Carousel.Caption>
            <h3>Sports Events</h3>
            <p>Book all types of Sports events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bussImg} alt="Business Events" />

          <Carousel.Caption>
            <h3>Business Events</h3>
            <p>Book all types of Business events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fashionImg}
            alt="fashion Events"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Fashion Events</h3>
            <p className="text-dark">Book all types of Fashion events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cinemaImg} alt="Cinema Events" />

          <Carousel.Caption>
            <h3>Cinema Events</h3>
            <p>Book all types of Cinema events</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
