import Layout from "../components/MyLayout.js";
import { Component } from "react";

import data from "../public/json/data.json";


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const works = data.work;

    const trigger = () => {
      this.setState(state => {
        return state.count < works.length -1  ? { count: state.count + 1 } : { count: 0 };
      })
    };
    const reverseTrigger = () => {
      this.setState((state) => {
        return state.count === 0
          ? { count: works.length - 1 }
          : { count: state.count - 1 };
      });
    }
    const imgStyle = {
      width: "530px",
      height: "330px",
      transition: "opacity 1s ease-in-out"
    };
    const listStyle = {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5rem",
      position: "relative",
      transform: "translateX(0)",
      transition: "opacity 1s ease-in-out",
    };
    const h2 = {
      position: "absolute",
      top: "-100px"
    }
    const p = {
      position: "absolute",
      bottom: "-100px",
      textAlign: "center"
    };

    const imgList = works.map((work, i) => (
      <li key={i} style={listStyle}>        
        <h2 style={h2}>{work.title}</h2>
        <a href={work.url} target="_blank">
          <img src={work.img} style={imgStyle} className="slider-img"/>
        </a>
        <p style={p}>{work.content}</p>
      </li>
    ));

    return (
      <div className="main">
        <div className="cover">
          <div onClick={reverseTrigger} className="prev">
            <div className="prev_inner"></div>
          </div>
          <ul>{imgList[this.state.count]}</ul>
          <div onClick={trigger} className="next">
            <div className="next_inner"></div>
          </div>
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
              display: flex;
              justify-content: center;
              align-items: center;
              height: 60px;
              width: 60px;
              top: 160px;
              z-index: 100;
            }
            .prev_inner {
              border-right: 3px solid #fff;
              border-bottom: 3px solid #fff;
              height: 25px;
              width: 25px;
              transform: rotate(135deg);
            }
            .next {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              right: 0;
              height: 60px;
              width: 60px;
              top: 160px;
              z-index: 100;
            }
            .next_inner {
              border-right: 3px solid #fff;
              border-bottom: 3px solid #fff;
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
