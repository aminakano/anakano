import Layout from "../components/MyLayout.js";
import { Component } from "react";

import img1 from "../public/NYSL_web.png";
import img2 from "../public/TGIF.png";
import img3 from "../public/NYSL_mob.png";
import img4 from "../public/quiz.png";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const images = [img1, img2, img3, img4];
    const trigger = () => {
      this.setState(state => {
        return state.count < 3 ? { count: state.count + 1 } : { count: 0 };
      })
    };
    const reverseTrigger = () => {
      this.setState((state) => {
        return state.count === 0 ? { count: 3 } : { count: state.count -1 };
      });
    }
    const imgStyle = {
      width: "530px",
      height: "330px",
    };
    const listStyle = {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5rem",
      transition: "ease 1s all"
    };
    const imgList = images.map((image, i) => (
      <li className={"list" + i} key={i} style={listStyle}>
        <img src={image} style={imgStyle} />
      </li>
    ));

    return (
      <div className="main">
        <h1>Title</h1>
        <div className="cover">
          <div onClick={reverseTrigger} className="prev">
          </div>
          <ul id="slider">{imgList[this.state.count]}</ul>
          <div onClick={trigger} className="next"></div>
        </div>
        <style jsx>
          {`
            .main {
              width: 100%;
              height: 92vh;
              background-color: #25252b;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: #fff;
            }
            p {
              font-size: 2rem;
            }
            img {
              width: 530px;
              height: 330px;
            }
            .cover {
              background: url("/mac.png");
              width: 700px;
              height: 400px;
              background-repeat: no-repeat;
              background-size: cover;
              position: relative;
            }
            .prev {
              position: absolute;
              border-right: 3px solid #fff;
              border-bottom: 3px solid #fff;
              top: 180px;
              height: 25px;
              width: 25px;
              transform: rotate(135deg);
            }
            .next {
              position: absolute;
              border-right: 3px solid #fff;
              border-bottom: 3px solid #fff;
              top: 180px;
              right: 0;
              height: 25px;
              width: 25px;
              transform: rotate(-45deg);
            }
            .prev:hover,
            .next:hover {
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Layout(Page);
