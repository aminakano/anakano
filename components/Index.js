import React from "react";

const Index = ({ title, name, lang }) => (
  <>
    <h1 className={lang}>{name}</h1>
    <p className={lang}>{title}</p>
    <style jsx>
      {`
        p {
          font-size: 2rem;
        }
      `}
    </style>
  </>
);

export default Index;
