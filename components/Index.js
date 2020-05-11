import React from "react";

const Index = ({ title, name, lang }) => (
  <div className="main">
    <h1 className={lang}>{name}</h1>
    <p className={lang}>{title}</p>
    <style jsx>
      {`
        .main {
          width: 100%;
          height: 92vh;
          background-color: #10b1b0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        p {
          font-size: 2rem;
        }
      `}
    </style>
  </div>
);

export default Index;
