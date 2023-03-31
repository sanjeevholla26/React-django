import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {useNavigate} from "react-router-dom";
function Img() {
let history = useNavigate()

  function move_to_login(){
      history('/login')
  }
  function move_to_lists(){
    history('/ngo-list')
  }
function move_to_reg(){
  history('/Register-ngo')
}
  return (
    <div className="head">
    <Carousel className="img">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.licdn.com/dms/image/C5612AQHsxNCU7rX3pw/article-cover_image-shrink_600_2000/0/1520059373629?e=2147483647&v=beta&t=UngNkBLY0pqw2z8uRnzLB97XQbghM4wxhQeaK0UHcsw"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/1199796265/photo/alphabet-letter-wooden-blocks-with-words-give-in-child-and-parents-hands-family-and-charity.jpg?s=612x612&w=0&k=20&c=pw3vEEoJBcQlem1TZPsEFvE-VXfkoKOpHQ74T9LbGvw="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gives an Helping hand</h3>
          <p>
            Philanthropists will give u help
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="head-text">
      <h2>What is an NGO..?</h2>
      <p>a non-profit organization that operates independently of any government, typically one whose purpose is to address a social or political issue.
      </p>
      <h1>How to start..!</h1>
      <p>Its just a 3 step process</p>
      <div className="head-step">
        <div className="head-cir" onClick={move_to_login}><h1>1</h1></div>
        <div class="arrow-1"></div>
        <div className="head-cir" onClick={move_to_lists}><h1>2</h1></div>
        <div class="arrow-1"></div>
        <div className="head-cir" onClick={move_to_reg}><h1>3</h1></div>
      </div>
      <div className="step-text">
        <p>SignUP</p>
        <p>View NGOs</p>
        <p>Register NGO</p>
      </div>
    </div>
    </div>
  );
}

export default Img;