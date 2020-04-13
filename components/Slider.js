import { Component } from "react";
import Slider from "react-slick";
import img1 from "../public/NYSL_web.png";
import img2 from "../public/TGIF.png";
import img3 from "../public/NYSL_mob.png";
import img4 from "../public/quiz.png";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Slider>
        <style jsx>
          {`
            div {
              color: #fff;
            }
            p {
              font-size: 2rem;
            }
            img {
              width: 550px;
              height: 350px;
            }
          `}
        </style>
      </div>
    );
  }
}