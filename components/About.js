import React from "react";
import image from "../public/profile.png";

const About = ({ title, text, lang }) => (
  <div className="main">
    <h1 className={lang}>{title}</h1>
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

        @media screen and (max-width: 600px) {
          h1 {
            margin-bottom: 1rem;
            font-size: 3rem;
            line-height: 0.8;
          }

          h1.jp {
            font-size: 2.5rem;
          }

          div {
            flex-direction: column;
          }

          img {
            width: 6rem;
            height: 6rem;
          }

          p {
            width: 90%;
            padding: 1rem 5%;
            font-size: 1rem;
            margin: 0;
            line-height: 1.5;
          }
        }

        @media screen and (max-width: 320px) {
          p {
            font-size: 0.8rem;
          }
        }
      `}
    </style>
  </div>
);

export default About;
