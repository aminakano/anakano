import React from "react";
import image from "../public/profile.png";

const About = ({ title, text }) => (
  <div className="main">
    <h1>{title}</h1>
    <div>
      <img src={image} />
      <p>{text}</p>
    </div>
    <style jsx>
      {`
        .main {
          width: 100%;
          height: 92vh;
          background-color: #d3d3d3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          font-size: 1.25rem;
          font-weight: 300;
          width: 50%;
          line-height: 1.8;
          margin-left: 2rem;
        }

        img {
          border-radius: 50%;
          width: 14rem;
          height: 14rem;
        }
      `}
    </style>
  </div>
);

export default About;
